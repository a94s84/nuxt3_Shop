import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
    try {
        const {userID} = await readBody(e);
        let applyList = await prisma.sampleApplyData.findMany({
            where: {
                userID: userID,
            },
            select: {
                applyID: true,
                name: true,
                phone: true,
                date: true,
                address: true,
                flavor: {
                    select: {
                        name: true,
                    },
                },
                amount: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return applyList;
    } catch (error) {
        throw createError({
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        });
    }
})