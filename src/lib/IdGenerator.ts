import {
    v1 as uuidv1,
    v3 as uuidv3,
    v4 as uuidv4,
    v5 as uuidv5,
    v5,
} from 'uuid';

export default class IdGenerator {
    static generateUUIDv1(): string {
        return uuidv1();
    }

    static generateUUIDv3(namespace: string, name: string): string {
        return uuidv3(name, namespace);
    }

    static generateUUIDv4(): string {
        return uuidv4();
    }

    static generateUUIDv5(namespace: string, name: string): string {
        return uuidv5(name, namespace);
    }
}
