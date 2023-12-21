/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 9:17:07 PM  CST
 * @ Last Modification Date: December 20, 2023 at 9:47:20 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { RequestHandler } from "express";
import { IResponse } from "../models/types";
import Property, { IProperty } from "../models/property.model";

export const addProperties: RequestHandler<unknown, IResponse<string>, IProperty> = async (request, response, next) => {
    try {
        const results = await Property.create({
            ...request.body
        })
        response.status(200).json({ success: true, message: 'Property added succesfully', data: results.id.toString() })
    } catch (error) {
        response.json({ success: false, message: 'Error adding the property' });
        next(error);
    }
}

export const getProperties: RequestHandler<unknown, IResponse<IProperty>, unknown> = async (request, response, next) => {

}



// 1. request params
// 2. response body
// 3. request body
// 4. request query params