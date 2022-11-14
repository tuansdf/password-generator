import useAppStore from "/src/components/app.store";
import GeneratorPage from "/src/pages/generator.page";
import SettingsPage from "/src/pages/settings.page";

export default function App() {
  const isSettings = useAppStore((state) => !!state.secret || !!state.name);

  return (
    <div className="grid min-h-screen place-items-center bg-slate-900 text-slate-50">
      {/* main */}
      <div className="w-full max-w-lg rounded-md border border-slate-700 bg-slate-800 p-6 lg:p-10">
        {/* title */}
        <h1 className="mb-8 text-center text-2xl font-semibold">
          Password Manager
        </h1>
        {!isSettings ? <SettingsPage /> : <GeneratorPage />}
      </div>
    </div>
  );
}
