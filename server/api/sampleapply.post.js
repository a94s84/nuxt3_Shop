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
})

export default defineEventHandler(async (e) => {
    const { name, phone, email, flavor, amount, date, address } = await readBody(e)
    const { error } = await schema.validate({ name, phone, email, flavor, amount, date, address })
    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }
    return await prisma.sampleApplyData.create({
        data: {
            name,
            phone,
            email,
            flavor: parseInt(flavor),
            amount: parseInt(amount),
            date,
            address
        }
    })
})