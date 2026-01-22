import Product from "../models/product.model";

export const getAllProduct = async(req, res)=>{
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
export const getOne = async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                message:"Không có sản phẩm nào",
            });
        }
        return res.json(product);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
export const createOne = async(req, res)=>{
    try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
export const deleteOne = async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(201).json({message:"Xóa thành công"});
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
export const updateOne = async(req, res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).json({message:"Up thành công"});
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
