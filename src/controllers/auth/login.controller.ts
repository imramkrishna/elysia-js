import type { Context } from "elysia";
import { StatusCode, User } from "../../types";
const loginController=({body,set}:Context)=>{
    if(!body){
        set.status=StatusCode.BAD_REQUEST
        return{
            message:"invalid request"
        }
    }
    const {email,password}=body as User;
    if(email=="admin@email.com"){
        if(password=="admin"){
            set.status=StatusCode.SUCCESS
            return{
                message:"login successful"
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