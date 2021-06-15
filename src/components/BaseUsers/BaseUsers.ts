let dataBase: IDBDatabase;

const DATABASE_NAME = 'vladNew91';
const DATABASE_VERSION = 2;
const NAME_OBJECT_STORE = 'playes';
const FIRST_INDEX = 'name';
const SECOND_INDEX = 'surname';
const THIRD_INDEX = 'email';

export const BaseUsers = (name: string, surname: string, email: string) => {
  const iDB = window.indexedDB;
  const openRequest = iDB.open(DATABASE_NAME, DATABASE_VERSION);

  openRequest.onupgradeneeded = () => {
    dataBase = openRequest.result;
    const store = dataBase.createObjectStore(NAME_OBJECT_STORE, {
      keyPath: 'id',
      autoIncrement: true,
    });
    store.createIndex(FIRST_INDEX, FIRST_INDEX);
    store.createIndex(SECOND_INDEX, SECOND_INDEX);
    store.createIndex(THIRD_INDEX, THIRD_INDEX, { unique: true });
  };

  openRequest.onsuccess = () => {
    dataBase = openRequest.result;
    const transaction = dataBase.transaction(NAME_OBJECT_STORE, 'readwrite');
    const store = transaction.objectStore(NAME_OBJECT_STORE);
    store.put({ name, surname, email });
  };
};
