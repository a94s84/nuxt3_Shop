import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default defineEventHandler(async () => {
    try {
        const [flavorlist, amountlist] = await Promise.all([
            prisma.flavor.findMany(),
            prisma.sampleAmount.findMany()
        ]);

        if (!flavorlist.length || !amountlist.length) {
            throw createError({
                statusCode: 404,
                statusMessage: 'FlavorList or AmountList does not exist'
            });
        }

        return { flavorlist, amountlist };
    } catch (error) {
        throw createError({
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        });
    }
})