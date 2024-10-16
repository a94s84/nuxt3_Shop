import products from '@/data/products.json'
export default defineEventHandler ((e)=> {
    const param = e.context.params['flavor-:id'];
    const [flavor, id] = param.split('-').map(decodeURI);
    const biscuit = products.find(p => p.flavor === flavor && p.id.toString() === id);
    if(!biscuit) {
        throw createError ({
            statusCode: 404,
            message: `Biscuit with ID of ${id} does not exist`
        })
    }
    return biscuit
})