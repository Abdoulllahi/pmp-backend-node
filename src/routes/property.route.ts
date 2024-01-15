/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 9:15:13 PM  CST
 * @ Last Modification Date: December 21, 2023 at 2:40:30 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { Router } from "express";
import { addProperty, getProperties, getPropertyById, updatePropertyById } from "../controllers/property.controller";
const router = Router();

router.get('/', getProperties);
router.get('/:propertyId', getPropertyById);
router.post('/', addProperty);
router.put('/:propertyId', updatePropertyById);
export default router;