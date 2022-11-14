import clsx from "clsx";
import hash from "hash.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAppStore from "/src/components/app.store";
import Button from "/src/components/button";
import TextField from "/src/components/text-field";

interface IHashContent {
  name: string;
  secret: string;
  site: string;
}

const defaultResult = "Please enter a domain name";

export default function GeneratorPage() {
  const { reset, name, secret } = useAppStore();

  const { register, watch } = useForm<{ site: string }>();
  const [showPopup, setShowPopup] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const result = useMemo(() => {
    const site = watch("site");
    if (!name || !secret) return;
    return site
      ? hash
          .sha512()
          .update(name + secret + site)
          .digest("hex")
          .substring(0, 16)
      : "";
  }, [watch("site")]);

  useEffect(() => {
    const saveToClipboard = () => {
      if (!resultRef.current?.textContent || showPopup) return;
      navigator.clipboard.writeText(resultRef.current?.textContent);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 500);
    };
    resultRef.current?.addEventListener("click", saveToClipboard);
    return () =>
      resultRef.current?.removeEventListener("click", saveToClipboard);
  }, []);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
        <TextField label="Site Domain" {...register("site")} />

        <div>
          <div className="mb-2">Result</div>

          <div className="relative">
            {/* text */}
            <div
              ref={resultRef}
              title="Click to copy to clipboard"
              className={clsx("cursor-pointer truncate rounded-md px-4 py-3", {
                "bg-red-500": !result,
                "bg-green-600": !!result,
              })}
            >
              {result || defaultResult}
            </div>
            {/* popover */}
            <div
              className={clsx(
                "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-slate-500 p-2 text-sm transition-opacity",
                { "opacity-0": !showPopup }
              )}
            >
              Copied to clipboard
            </div>
          </div>
        </div>
        <Button type="button" onClick={reset} className="mt-4">
          Sign Out
        </Button>
      </form>
    </>
  );
}
