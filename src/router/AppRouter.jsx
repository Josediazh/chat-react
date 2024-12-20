import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthPage } from "../auth/pages/AuthPage"
import { ChatAppPage } from "../chatapp/pages/ChatAppPage"


export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <AuthPage />,
        },
        {
            path: "/chats",
            element: <ChatAppPage />,
        }
    ])


    return (
        <RouterProvider router={router} />
    )

}

