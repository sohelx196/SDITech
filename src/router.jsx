import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./component/Homepage";
import LostAndFound from "./component/LostAndFound";
import Signup from "./component/main_component/SignUp";
import Login from "./component/main_component/Login";
import PageNotFound from "./component/main_component/PageNotFound";
import Events from "./component/Events";

 const router = createBrowserRouter([
    
{
    path:"",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Homepage/>
        },
        {
            path:"lost&found",
            element:<LostAndFound/>
        },
        {
            path:"events",
            element:<Events/>
        },
     
      
    ]
},

{
    path:"signUp",
    element:<Signup/>
},
{
    path:"login",
    element:<Login/>
},

       {
        path:"*",
        element:<PageNotFound/>
       }


])

export default router