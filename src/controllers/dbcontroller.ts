import { db } from "../db/client"
import { Context } from "elysia"
import { users } from "../db/schema"
import { eq, ilike } from "drizzle-orm"
export const addUserController = async ({ body, set }: Context | any) => {
    try {
        const user = body as any;
        console.log(body)
        
        const inserted = await db.insert(users).values({ email:user.email }).returning()
        console.log("add user controller executed")

        return {
            message: "user added successfully",
            inserted
        }
    } catch (error) {
        console.error("error while adding user:", error)
        set.status = 500
        return {
            message: "error while adding user to database"
        }
    }
}

export const getUserController = async ({ set }: Context) => {
    try {
        const usersList = await db.select().from(users)
        console.log("get user controller executed")

        return {
            message: "users list fetched successfully",
            usersList
        }
    } catch (error) {
        console.error("error while fetching users:", error)
        set.status = 500
        return {
            message: "error while fetching user list"
        }
    }
}
export const updateUserController=async({body,params}:Context)=>{
    const {id}=params as {id:string}
    const {email}=body as {email:string}
    try {
        const updated=await db.update(users).set({email:email}).where(eq(users.id,Number(id)))
        if(!updated){
            throw new Error("Error updating user")
        }  
        return{
            message:"user updated",
            user:updated
        }
    } catch (error) {
        return{
            message:"error while updaing user"
        }
    }
}
export const getUserByIdController=async({params}:Context)=>{
    const {id}=params as {id:string};
    try {
        const u=await db.select().from(users).where(eq(users.id,Number(id)))   
        if(!u){
            return{
                message:"no user found"
            }
        }
        return{
            message:"user found",
            user:u
        }
    } catch (error) {
        return{
            message:"error while fetching user"
        }
    }
}
export const deleteUserController=async({params}:Context)=>{
    try {
        const {id}=params as {id:string}
        const deleted=await db.delete(users).where(eq(users.id,Number(id)))
        if(!deleted){
            return "invalid request.Can,t Delete the user"
        }
        return{
            message:"user deleted"
        }
    } catch (error) {
        return "error deleting user"
    }
}