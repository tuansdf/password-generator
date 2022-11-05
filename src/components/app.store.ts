import create from "zustand";
import { persist } from "zustand/middleware";

export interface IAppSettings {
  name?: string;
  secret?: string;
}

interface AppState extends IAppSettings {
  set: (data: IAppSettings) => void;
  reset: () => void;
}

const defaultSettings: IAppSettings = {
  name: undefined,
  secret: undefined,
};

const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...defaultSettings,
      set: (data: IAppSettings) => set(data),
      reset: () => set(defaultSettings),
    }),
    { name: "pg" }
  )
);

export default useAppStore;
