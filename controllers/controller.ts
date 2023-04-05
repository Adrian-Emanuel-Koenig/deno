import { Request, Response } from "npm:express";
import { productTest } from "../models/models.ts";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const products = await productTest.find();
    res.json(products);
  } catch (err) {
    console.log(String(err));
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    await productTest.create(req.body);
    res.json("Product created successfully");
  } catch (err) {
    console.log(String(err));
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    await productTest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json("Product successfully updated");
  } catch (err) {
    console.log(String(err));
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    await productTest.findByIdAndDelete(req.params.id);
    res.json("Product successfully deleted");
  } catch (err) {
    console.log(String(err));
  }
};