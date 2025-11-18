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