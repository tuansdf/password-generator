import clsx from "clsx";
import hash from "hash.js";
import { useEffect, useRef, useState } from "preact/hooks";
import { useForm } from "react-hook-form";
import useAppStore from "../components/app.store";
import Button from "../components/button";
import TextField from "../components/text-field";

interface IHashContent {
  name: string;
  secret: string;
  site: string;
}

const defaultResult = "Please enter a domain name";

export default function GeneratorPage() {
  const { register, watch } = useForm<{ site: string }>();

  const { reset, name, secret } = useAppStore();

  const [showPopup, setShowPopup] = useState(false);
  const [result, setResult] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  const hashResult = ({ site, name, secret }: IHashContent) =>
    setResult(
      site
        ? hash
            .sha512()
            .update(name + secret + site)
            .digest("hex")
            .substring(0, 16)
        : defaultResult
    );

  useEffect(() => {
    const site = watch("site");
    if (!name || !secret) return;
    hashResult({ site, name, secret });
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
      <form className="grid gap-4">
        <TextField label="Site Domain" {...register("site")} />

        <div>
          <div className="mb-2">Result</div>

          <div className="relative">
            {/* text */}
            <div
              ref={resultRef}
              title="Click to copy to clipboard"
              className="cursor-pointer truncate rounded-md bg-cyan-500 px-4 py-3"
            >
              {result || defaultResult}
            </div>
            {/* popover */}
            <div
              className={clsx(
                "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-black/50 p-2 text-sm transition-opacity",
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
