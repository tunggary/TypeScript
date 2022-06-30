interface NewStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: NewStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("사과", "apple");
stringStorage.get("사과");

const boolStorage = new LocalStorage<boolean>();
boolStorage.set("사과", false);
boolStorage.get("사과");
