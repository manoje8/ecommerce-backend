import productModel from "../model/product.model.js";

class Products
{
    static async getProducts(req, res, next)
    {
        try
        {
            const products = await productModel.find();
            res.status(200).send(products)
        } 
        catch (error) 
        {
            console.log("Error in fetch products");
            next(error)
        }
    }

    static async searchProduct(req, res, next)
    {
        const term = req.query.name;
        try
        {
            const products = await productModel.find({ title: { $regex: term, $options: 'i' } });
            res.status(200).send(products)
        } 
        catch (error) 
        {
            console.log("Error in searching products");
            next(error)
        }
    }

    static async categoryProducts(req, res, next)
    {
        const {category} = req.params;
        try
        {
            const products = await productModel.find({ category });
            res.status(200).send(products)
        } 
        catch (error) 
        {
            console.log("Error in category the products");
            next(error)
        }
    }

    static async addProducts(req, res, next)
    {
        const {products} = req.body;
        try
        {
            const product = await productModel.insertMany(products);
            res.status(200).send(product)
        } 
        catch (error) 
        {
            console.log("Error in adding the products");
            next(error)
        }
    }
}

export default Products