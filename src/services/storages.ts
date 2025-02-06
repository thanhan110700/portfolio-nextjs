export const storageKeys = {
  DARK_MODE: "DarkMode",
};

export const storage = {
  getItem: <T = string>(key: string): T =>
    JSON.parse(localStorage.getItem(key) as string),
  setItem: <T = string>(key: string, value: T) =>
    localStorage.setItem(key, JSON.stringify(value)),
  clearItem: (key: string) => localStorage.removeItem(key),
};
