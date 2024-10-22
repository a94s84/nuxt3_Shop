import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default defineEventHandler ( async() => {
    const result = {}
    try {
        const [flavorlist, amountlist] = await Promise.all([
            prisma.flavor.findMany(),
            prisma.sampleAmount.findMany()
        ]);

        result.flavorlist = flavorlist;
        result.amountlist = amountlist;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: error.message
        });
    } finally {
        await prisma.$disconnect();
    }
    return result
})