import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler (async (e)=> {
    const param = e.context.params['flavor-:id'];
    const [flavor, id] = param.split('-').map(decodeURI);
    const  biscuit = await prisma.products.findUnique({
        where: {
            id: parseInt(id),
            flavor: flavor
        }
    })
    if(!biscuit) {
        throw createError ({
            statusCode: 404,
            message: `Biscuit with ID of ${id} does not exist`
        })
    }
    return biscuit
})