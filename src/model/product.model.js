import { model, Schema } from "mongoose";

const productSchema = new Schema(
    {
        title: {type: String},
        image: {type: String},
        price: {type: Number},
        category: {type: String},
        description: {type: String},
        quantity: {type: String}
    },
    {
        timestamps: true
    },
    {
        collection: 'products',
        versionKey: false
    }
)

const productModel = model('products', productSchema)

export default productModel