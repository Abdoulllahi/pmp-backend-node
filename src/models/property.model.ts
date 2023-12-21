/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 5:39:33 PM  CST
 * @ Last Modification Date: December 20, 2023 at 9:48:08 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { InferSchemaType, Schema, model, Types } from "mongoose";
// import { BusinessType } from "./types";


const propertySchema = new Schema({
    squareFeetArea: { type: Number },
    detailOverview: { type: String },
    unitAreaPrice: { type: Number },
    // price: { type: Number },
    // propertyType: { type: String },
    // homeType: { type: String },
    // numberOfParking: { type: Number },
    // builtDate: { type: Date },
    // numberOfBedroom: { type: Number },
    // bathroomCount: { type: Number },
    // businessType: { type: String, enum: Object.values(BusinessType) },
    // pricePerMonth: { type: Number },
    // views: { type: Number, default: 0 },
    // address: { type: Types.ObjectId, ref: 'address' },
    // creatioTime: { type: Date, default: Date.now() },

})

export type IProperty = InferSchemaType<typeof propertySchema>;

export default model<IProperty>('property', propertySchema);