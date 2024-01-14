/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 21, 2023 at 11:41:12 AM  CST
 * @ Last Modification Date: December 21, 2023 at 2:44:17 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import Property, { IProperty } from "../models/property.model";

export class PropertyData {

    async createProperty(propertyData: Partial<IProperty>): Promise<IProperty> {
        try {
            const property = await Property.create(propertyData);
            return property;
        } catch (error) {
            console.error('Error while creating the property', error);
            throw new Error('Error creating property');
        }
    }

    async findAllProperties(pageNumber: number, pageSize: number): Promise<IProperty[]> {
        try {
            const properties = await Property.aggregate([
                { $project: { views: 0 } },
                { $sort: { price: 1 } },
                { $skip: pageSize * (pageNumber - 1) },
                { $limit: pageSize }
            ]);
            return properties;
        } catch (error) {
            console.error('Error while getting properties', error);
            throw new Error('Error returning properties');
        }
    }

    async updatePropertyById(id: string, updatedProperty: Partial<IProperty>): Promise<IProperty> {
        try {
            const property = await Property.findByIdAndUpdate(
                id,
                { $set: { ...updatedProperty } },
                {returnDocument: 'after'});
            if (!property) {
                throw new Error('Property not found');
            }
            return property;
        } catch (error) {
            console.error('Error while updating the property', error);
            throw new Error('Error updating property');
        }
    }
}

export default new PropertyData();