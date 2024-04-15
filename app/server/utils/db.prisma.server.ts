
import { PrismaClient } from '@prisma/client';

let singleInstance: PrismaClient | null = null;
const createInstance = () => {
    if (!singleInstance) {
        singleInstance = new PrismaClient();
    }
    return singleInstance;
}

export const prisma = createInstance();