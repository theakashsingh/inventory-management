// indexDbWrapper.ts

interface DataRecord {
    id: number;
    completeData: any; // Change 'any' to your specific JSON type, if known
}

// Function to open the IndexDB database
function openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request: IDBOpenDBRequest = window.indexedDB.open(
            'MyDatabase',
            1
        );

        request.onupgradeneeded = (event: any) => {
            const db: IDBDatabase = event?.target?.result;
            const objectStore = db.createObjectStore('dataStore', {
                keyPath: 'id',
            });
            objectStore.createIndex('completeData', 'completeData', {
                unique: false,
            });
        };

        request.onsuccess = (event: any) => {
            resolve(event?.target?.result);
        };

        request.onerror = (event) => {
            reject('Error opening database');
        };
    });
}

// Function to save data to IndexDB
function saveData(data: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
        const db = await openDatabase();

        const transaction = db.transaction('dataStore', 'readwrite');
        const objectStore = transaction.objectStore('dataStore');

        const id = 1; // For simplicity, we'll use a fixed ID here, but you could generate a dynamic one if needed.
        const request = objectStore.put({ id, completeData: data });

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = () => {
            reject('Error saving data');
        };
    });
}

// Function to retrieve data from IndexDB
function getData(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const db = await openDatabase();

        const transaction = db.transaction('dataStore', 'readonly');
        const objectStore = transaction.objectStore('dataStore');

        const id = 1; // For simplicity, we're using the fixed ID here, but you can use a dynamic ID if needed.
        const request = objectStore.get(id);

        request.onsuccess = (event: any) => {
            const result: DataRecord = event?.target?.result;
            if (result) {
                resolve(result.completeData);
            } else {
                reject('No data found');
            }
        };

        request.onerror = () => {
            reject('Error getting data');
        };
    });
}

export { getData, saveData };
