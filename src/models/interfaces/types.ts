/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 20, 2023 at 8:37:42 PM  CST
 * @ Last Modification Date: December 21, 2023 at 12:21:45 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

export interface IResponse<T> {
    success: boolean,
    message?: unknown,
    data?: T,
}