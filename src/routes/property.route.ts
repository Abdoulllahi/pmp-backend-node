/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 9:15:13 PM  CST
 * @ Last Modification Date: December 20, 2023 at 9:49:27 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { Router } from "express";
import { addProperties } from "../controllers/property.controller";
const router = Router();

router.post('/', addProperties);

export default router;