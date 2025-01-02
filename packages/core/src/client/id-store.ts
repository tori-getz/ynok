import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = '@ynok/id';

export class IdStore {
  public static getId(): string {
    const storedId = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedId) {
      return storedId;
    }

    const generatedId = uuid();

    localStorage.setItem(LOCAL_STORAGE_KEY, generatedId);

    return generatedId;
  }
}
