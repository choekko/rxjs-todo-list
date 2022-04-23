const { localStorage } = window;

const storage = {
  local: {
    set: (key: string, value: any) => {
      const stringifiedValue = JSON.stringify(value);
      localStorage.setItem(key, stringifiedValue);
    },
    get: (key: string) => {
      const stringifiedValue = localStorage.getItem(key);
      return stringifiedValue ? JSON.parse(stringifiedValue) : null;
    },
    remove: (key: string) => {
      localStorage.removeItem(key);
    },
    clear: () => {
      localStorage.clear();
    }
  }
}

export default storage;