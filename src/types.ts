import { Context } from "elysia"

export type User={
    id:number
    email:string,
    password:string
}

export enum StatusCode{
    SUCCESS=200,
    NOT_FOUND=404,
    BAD_REQUEST=405,
    INTERNAL_SERVER_ERROR=500
}
export interface apiRoute{
    path:string,
    method:"get" | "post" | "put" | "delete" | "options",
    controller:(arg:Context | any)=>{}
}