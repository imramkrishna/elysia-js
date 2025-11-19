import type { Context } from "elysia";
import { StatusCode, User } from "../../types";
import { JWT_SECRET } from "../../constants";
import jwt from "jsonwebtoken"
const loginController=async({body,set}:Context)=>{
    const {email,password}=body as User;
    console.log(email,password)
    if(email=="admin@email.com"){
        if(password=="admin"){
            set.status=StatusCode.SUCCESS
            const token=jwt.sign({email},JWT_SECRET)
            return{
                message:"login successful",
                token
            } 
        }
        set.status=StatusCode.NOT_FOUND
        return{
            message:"invalid password"
        }
    }
    set.status=StatusCode.NOT_FOUND
    return{
        message:"No account associated with email"
    }
}
export default loginController;