/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 8:46:16 PM  CST
 * @ Last Modification Date: December 20, 2023 at 8:57:28 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { InferSchemaType, Schema, model } from 'mongoose';

export const addressSchema = new Schema({
    city: String,
})

export type IAddress = InferSchemaType<typeof addressSchema>;

export default model<IAddress>('address', addressSchema);