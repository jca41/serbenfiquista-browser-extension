import { writable } from "svelte/store";

export type IStorage = {
  muteUsers: {
    on: boolean;
    users: string[];
    blur: boolean;
  };
};

const defaultStorage: IStorage = {
  muteUsers: {
    on: true,
    blur: false,
    users: [],
  },
};

export const storage = {
  get: (): Promise<IStorage> =>
    chrome.storage.sync.get(null) as Promise<IStorage>,
  set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};

export const appStore = writable<IStorage>(defaultStorage);
