import { SubmitHandler, useForm } from "react-hook-form";
import useAppStore, { IAppSettings } from "../components/app.store";
import Button from "../components/button";
import TextField from "../components/text-field";

export default function SettingsPage() {
  const { register, handleSubmit } = useForm<IAppSettings>();

  const setAppSettings = useAppStore((state) => state.set);

  const onSubmit: SubmitHandler<IAppSettings> = (data) => {
    setAppSettings(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
      <div className="grid gap-4">
        <TextField
          type="text"
          label="Your name"
          {...register("name", { required: true })}
        />
        <TextField
          type="password"
          label="Your secret key"
          {...register("secret", { required: true })}
        />
      </div>
      <Button>Sign In</Button>
    </form>
  );
}
