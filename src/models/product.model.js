import { required } from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Tên sp là bắt buộc"],
            trim: true,
            maxlength: [200,"tên <=200"],
        },
        slug:{
            type: String,
            unique: true,
            lowercase: true,
        }, 
        description:{
            type: String,
            required: [true, "Mô tả là bắt buộc"],
        },
        price:{
            type:Number,
            required:[true,"Giá là bắt buộc"],
            min:[0,"giá ko dc âm"],
        },
        images:[String],
        stock:{
            type:Number,
            required:[true,"Số lg là bắt buộc"],
            min:[0,"Số lg ko đc âm"],
            default: 0,
        },
        status:{
            type:String,
            enum:["draft","published"],
            default:"draft",
        },
        ratings:{
            type:Number,
            default:0,
            min:[0,"Đánh giá thấp nhất 0"],
            max:[5,"Đánh giá cao nhất 5"],
            set: (val) => Math.round(val*10)/10,
        },
    },
    {timestamps:true, versionKey:false}
);
const Product = mongoose.model("Product", productSchema);
export default Product;