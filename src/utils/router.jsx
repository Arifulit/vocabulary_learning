import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
// import About from "../components/About/About";
import StartLearning from "../components/StartLearning/StartLearning";
import Tutorials from "../components/Tutorials/Tutorials";
// import About from "../components/About/About";
import AboutUs from "../components/AboutUs/AboutUs";
import Lesson from "../components/Lesson/Lesson";
import Login from "../components/Login/Login";
// import Login from "../components/Login/Login";
// import Register from "../components/Register/Register";

// import Login from "../components/Login/Login";
import Register from '../components/Register/Register';
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyProfile from "../components/MyProfile/MyProfile";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import TutorialPage from "../components/TutorialPage/TutorialPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/start-learning",
                element:<StartLearning/>,
                loader:()=> fetch("/word.json")
            },
            {
                path:"/tutorials",
                element:<PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
                loader:()=> fetch("/vocabularies.json")
            },
            {
                path:"/aboutUs",
                element:<AboutUs></AboutUs>
            },
            {
                path:"/lesson/:lesson_no",
                element:<Lesson></Lesson>,
                loader: async () => {
                    const Vocabulary = await fetch('../vocabularies.json').then(response => response.json());
                    const word = await fetch('../word.json').then(response => response.json());

                    return {
                        Vocabulary,
                        word
                    }
                }

            },
            {
                path:"/login",
                element:<Login></Login>
                
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/my-profile",
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>        
                },
            {
                path:"/update-profile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:"/tutorial-page",
                element:<TutorialPage></TutorialPage>
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            },
            {
                path:"/forgot-password",
                element:<ForgotPassword></ForgotPassword>
            }
           
              
        ]
    }
]);

export default router;