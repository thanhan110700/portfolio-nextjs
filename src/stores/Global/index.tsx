import { storage, storageKeys } from "@/services/storages";
import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export type GlobalProps = {
    darkMode: boolean;
    activeSection: string;
}

export const defaultDarkMode = {
    darkMode: false,
    activeSection: "hero",
};

export const globalState = atomWithReset<GlobalProps>(defaultDarkMode);


export const handleInitializeDarkMode = atom(null, async (get, set) => {
    const state = get(globalState);
    try {
        const isDarkMode = storage.getItem<boolean>(storageKeys.DARK_MODE) ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
        handleDarkMode(isDarkMode);
        set(globalState, { ...state, darkMode: isDarkMode });
    } catch (e: unknown) {
        console.error((e as Error).message);
    }
});

export const handleSetDarkMode = atom(null, (get, set, darkMode: boolean) => {
    const state = get(globalState);
    handleDarkMode(darkMode);
    set(globalState, { ...state, darkMode });
});

export const handleSetActiveSection = atom(null, (get, set, activeSection: string) => {
    const state = get(globalState);
    set(globalState, { ...state, activeSection });
});

const handleDarkMode = (isDarkMode: boolean) => {
    storage.setItem(storageKeys.DARK_MODE, isDarkMode);
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    else {
        document.documentElement.classList.remove('dark');
    }
}