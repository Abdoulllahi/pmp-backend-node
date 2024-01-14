/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 5:39:33 PM  CST
 * @ Last Modification Date: December 21, 2023 at 12:42:36 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { InferSchemaType, Schema, model } from "mongoose";
import { BusinessType } from "./enums/types";
import {addressSchema, IAddress } from "./adress.model";


const propertySchema = new Schema({
    squareFeetArea: { type: Number },
    detailOverview: { type: String },
    unitAreaPrice: { type: Number },
    price: { type: Number },
    propertyType: { type: String },
    homeType: { type: String },
    numberOfParking: { type: Number },
    builtDate: { type: Date },
    numberOfBedroom: { type: Number },
    bathroomCount: { type: Number },
    businessType: { type: String, enum: Object.values(BusinessType) },
    pricePerMonth: { type: Number },
    views: { type: Number, default: 0 },
    address: { type: addressSchema, default: {} as IAddress},
    creationTime: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: undefined },

})

export type IProperty = InferSchemaType<typeof propertySchema>;

export default model<IProperty>('property', propertySchema);