import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./component/Homepage";
import LostAndFound from "./component/LostAndFound";

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
        }
    ]
}

])

export default router