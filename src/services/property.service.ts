/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 21, 2023 at 11:48:51 AM  CST
 * @ Last Modification Date: December 21, 2023 at 12:58:54 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { IProperty } from "../models/property.model";
import PropertyData from "../data/property.data";

export class PropertyService {

    async addProperty(propertyData: Partial<IProperty>): Promise<IProperty> {
        try {
            const property = await PropertyData.createProperty(propertyData);
            return property;
        } catch (error) {
            console.error('Service error', error);
            throw new Error('Error while accessing data');
        }
    }

    async findAllPoperties(pageNumber: number = 1, pageSize: number = 10): Promise<IProperty[]> {
        try {
            const properties = await PropertyData.findAllProperties(pageNumber, pageSize);
            return properties;
        } catch (error) {
            console.error('Service error', error);
            throw new Error('Error while accessing data');
        }
    }

    async updatePropertyById(id: string, updatedProperty: Partial<IProperty>): Promise<IProperty> {
        try {
            const property = await PropertyData.updatePropertyById(id, updatedProperty);
            return property;
        } catch (error) {
            console.error('Service error', error);
            throw new Error('Error while accessing data');
        }
    }
}

export default new PropertyService();