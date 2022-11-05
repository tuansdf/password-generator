import useAppStore from "./components/app.store";
import GeneratorPage from "./pages/generator.page";
import SettingsPage from "./pages/settings.page";

export default function App() {
  const isSettings = useAppStore((state) => !!state.secret || !!state.name);

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-br from-cyan-900 to-cyan-700 text-white">
      {/* main */}
      <div className="w-full max-w-lg rounded-md bg-white/10 p-6 lg:p-10">
        {/* title */}
        <h1 className="mb-8 text-center text-4xl">Password Manager</h1>
        {!isSettings ? <SettingsPage /> : <GeneratorPage />}
      </div>
    </div>
  );
}
