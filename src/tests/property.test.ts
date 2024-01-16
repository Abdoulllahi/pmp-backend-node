/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: January 15, 2024 at 10:13:12 PM  CST
 * @ Last Modification Date: January 15, 2024 at 11:44:17 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import request from "supertest"
import app from "../app";
import { IProperty } from "../models/property.model";


describe('Property Controllers', () => {
    it('should get all properties', async () => {
        const response = await request(app).get('/properties');
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    it('should add property', async () => {
        const property: Partial<IProperty> = {
            squareFeetArea: 200,
            detailOverview: "some  details",
            unitAreaPrice: 230,
            price: 230443,
            homeType: "unknown",
            numberOfParking: 4,
            numberOfBedroom: 4
        }

        const response = await request(app).post('/properties').send(property);
        expect(response.status).toBe(201);
    })
})
