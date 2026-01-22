import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string()
        .trim()
        .max(200)
        .required()
        .messages({
            "string.base": "Tên sản phẩm phải là chuỗi",
            "string.empty": "Tên sản phẩm không được để trống",
            "string.max": "Tên sản phẩm tối đa 200 ký tự",
            "any.required": "Tên sản phẩm là bắt buộc",
        }),

    slug: Joi.string()
        .lowercase()
        .optional()
        .messages({
            "string.base": "Slug phải là chuỗi",
        }),

    description: Joi.string()
        .required()
        .messages({
            "string.base": "Mô tả phải là chuỗi",
            "string.empty": "Mô tả không được để trống",
            "any.required": "Mô tả là bắt buộc",
        }),

    price: Joi.number()
        .min(0)
        .required()
        .messages({
            "number.base": "Giá phải là số",
            "number.min": "Giá không được âm",
            "any.required": "Giá là bắt buộc",
        }),

    images: Joi.array()
        .items(Joi.string())
        .optional()
        .messages({
            "array.base": "Images phải là mảng",
        }),

    stock: Joi.number()
        .min(0)
        .required()
        .messages({
            "number.base": "Số lượng phải là số",
            "number.min": "Số lượng không được âm",
            "any.required": "Số lượng là bắt buộc",
        }),

    status: Joi.string()
        .valid("draft", "published")
        .optional()
        .messages({
            "any.only": "Status chỉ nhận draft hoặc published",
        }),

    ratings: Joi.number()
        .min(0)
        .max(5)
        .optional()
        .messages({
            "number.base": "Ratings phải là số",
            "number.min": "Đánh giá thấp nhất là 0",
            "number.max": "Đánh giá cao nhất là 5",
        }),
});

export default productSchema;