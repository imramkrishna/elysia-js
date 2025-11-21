import { addUserController, addUserDetailController, deleteUserController, getUserByIdController, getUserController, updateUserController } from "./controllers/dbcontroller"
import { apiRoute } from "./types";
const routes:apiRoute[]=[
    {
        path:"getUser",
        method:"get",
        controller:getUserController
    },
    {
        path:"addUser",
        method:"post",
        controller:addUserController
    },
    {
        path:"getUserById/:id",
        method:"get",
        controller:getUserByIdController
    },
    {
        path:"updateUser/:id",
        method:"put",
        controller:updateUserController
    },
    {
        path:"deleteUser/:id",
        method:"delete",
        controller:deleteUserController
    },
    {
        path:"addUserDetail",
        method:"post",
        controller:addUserDetailController
    }
]
export default routes;