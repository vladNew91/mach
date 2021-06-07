let dataBase: IDBDatabase;

export const BaseUsers = (name: string, surname: string, email: string) => {
  const iDB = window.indexedDB;
  const openRequest = iDB.open('vladNew91', 2);

  openRequest.onupgradeneeded = () => {
    dataBase = openRequest.result;
    const store = dataBase.createObjectStore('playes', {
      keyPath: 'id',
      autoIncrement: true,
    });
    store.createIndex('name', 'name');
    store.createIndex('surname', 'surname');
    store.createIndex('email', 'email', { unique: true });
  };

  openRequest.onsuccess = () => {
    dataBase = openRequest.result;
    const transaction = dataBase.transaction('playes', 'readwrite');
    const store = transaction.objectStore('playes');
    store.put({ name, surname, email });
  };
};
