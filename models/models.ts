import { Schema, model } from 'npm:mongoose';

interface Product {
    nombre: string,
    precio: number,
    stock: number,
}

const schema = new Schema<Product>({
    nombre: { type: String },
    precio: {type: Number},
    stock: {type: Number},

})

export const productTest = model('productTest', schema);