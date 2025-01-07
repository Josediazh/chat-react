import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthPage } from "../auth/pages/AuthPage"
import { ChatAppPage } from "../chatapp/pages/ChatAppPage"
import { useSelector } from "react-redux";


export const AppRouter = () => {

    const { status } = useSelector((state) => state.auth);


    const router = createBrowserRouter(
        status == 'authenticated'
            ? [
                {
                    path: "*/",
                    element: <ChatAppPage />,
                },
                {
                    path: "/",
                    element: <ChatAppPage />,
                },
                {
                    path: "/chats",
                    element: <ChatAppPage />,
                }
            ]
            : [
                {
                    path: "*/",
                    element: <AuthPage />,
                },
                {
                    path: "/",
                    element: <AuthPage />,
                },
                {
                    path: "/login",
                    element: <AuthPage />,
                },
            ])


    return (
        <RouterProvider router={router} />
    )

}

