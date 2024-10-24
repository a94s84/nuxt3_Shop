import Joi from 'joi'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().pattern(/^[0-9]+$/).required(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds:{allow:["com","net"]}
    }).required(),
    flavor: Joi.number().required(),
    amount: Joi.number().required(),
    date: Joi.string().required(),
    address: Joi.string().min(10).required(),
    userID:  Joi.string().required(),
})

export default defineEventHandler(async (e) => {
    const { name, phone, email, flavor, amount, date, address, userID } = await readBody(e);
    const { error } = schema.validate({ name, phone, email, flavor, amount, date, address, userID });        
    if (error) {
        return createError({
            statusCode: 412,
            statusMessage: "Please fill in the form, every field is required",
        });
    }
    try {
        
        return await prisma.sampleApplyData.create({
            data: {
                name,
                phone,
                email,
                flavorID: parseInt(flavor),
                amountID: parseInt(amount),
                date,
                address,
                userID
            }
        });
    } catch (error) {
        throw createError({
            statusCode: error.statusCode,
            statusMessage: error.statusMessage
        });
    } finally {
        await prisma.$disconnect();
    }
});
