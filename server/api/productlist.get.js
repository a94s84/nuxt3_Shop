import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    try {
        const products = prisma.products.findMany()
        if (!products) {
            throw createError({
                statusCode: 404,
                statusMessage: `Biscuits does not exist`
            })
        }
        return products
    } catch {
        throw createError({
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        });
    }
})