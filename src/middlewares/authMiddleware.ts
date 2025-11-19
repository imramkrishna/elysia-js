import Elysia, { Context } from "elysia";
import { StatusCode } from "../types";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

const authMiddleware = new Elysia()
    .derive(async ({ request, set }) => {
        console.log("Executing Middleware")
        const authHeader = request.headers.get("authorization");
        if (!authHeader?.startsWith("Bearer ")) {
            set.status = StatusCode.BAD_REQUEST;
            throw new Error("Invalid authorization header");
        }

        const token = authHeader.split(" ")[1];

        try {
            const decoded = await jwt.verify(token, JWT_SECRET);
            console.log("Decoded user : ",decoded)
            return {
                user: decoded
            }
        } catch (error) {
            set.status = StatusCode.INTERNAL_SERVER_ERROR;
            return {
                user: null
            }
        }
    })
    .as('scoped')
    

const checkAuth = new Elysia()
    .use(authMiddleware)
    .guard({
        beforeHandle({ user, set }: any) {
            if (!user) {
                set.status=405
                return {error : "unauthorized"}
            }
        }
    })
    .as('scoped')
export default checkAuth;