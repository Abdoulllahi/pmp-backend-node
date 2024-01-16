/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 9:17:07 PM  CST
 * @ Last Modification Date: January 14, 2023 at 5:13:58 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { RequestHandler } from "express";
import { IResponse } from "../models/interfaces/types";
import { IProperty } from "../models/property.model";
import PropertyService from "../services/property.service";

export const addProperty: RequestHandler<unknown, IResponse<IProperty>, Partial<IProperty>>
    = async (request, response, next) => {
        try {
            const createdProperty = await PropertyService.addProperty({ ...request.body });
            response.status(201).json({ success: true, message: 'Property added succesfully', data: createdProperty })
        } catch (error) {
            response.json({ success: false, message: 'Error adding the property' });
            next(error);
        }
    }

export const getProperties: RequestHandler<unknown, IResponse<IProperty[]>, unknown, { page: number }>
    = async (request, response, next) => {
        try {
            const pageNumber = request.query.page || 1;
            const pageSize = 10
            const properties = await PropertyService.findAllPoperties(pageNumber, pageSize);
            response.status(200).json({ success: true, data: properties })
        } catch (error) {
            response.json({ success: false, message: 'Error getting properties' });
            next(error);
        }
    }

export const getPropertyById: RequestHandler<{ propertyId: string }, IResponse<IProperty>, unknown, unknown> =
    async (request, response, next) => {
        try {
            const property = await PropertyService.findPropertyById(request.params.propertyId);
            if (!property) {
                return response.status(404).json({ success: false, message: 'Property not found' });
            }
            response.status(200).json({
                success: true,
                data: property
            });
        } catch (error) {
            console.error('Error getting property', error);
            response.json({ success: false, message: `Error getting property with id ${request.params.propertyId}` });
            next(error);
        }
    }


export const updatePropertyById: RequestHandler<{ propertyId: string }, IResponse<IProperty>, Partial<IProperty>> =
    async (request, response, next) => {
        try {
            // TODO: Validate request body
            // TODO: Validate request params
            const updatedPropertyData: Partial<IProperty> = {
                ...request.body,
                updatedAt: new Date()
            };

            const updatedProperty = await PropertyService.updatePropertyById(request.params.propertyId, updatedPropertyData);
            if (!updatedProperty) {
                return response.status(404).json({ success: false, message: 'Property not found' });
            }
            // TODO: Send email to the user
            response.status(200).json({
                success: true,
                message: 'Property updated successfully',
                data: updatedProperty
            });
        } catch (error) {
            console.error('Error updating property:', error);
            response.json({ success: false, message: 'Error updating the property' });
            next(error);
        }
    };

// 1. request params
// 2. response body
// 3. request body
// 4. request query params