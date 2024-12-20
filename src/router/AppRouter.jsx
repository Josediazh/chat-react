import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthPage } from "../auth/pages/AuthPage"


export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <AuthPage />,
        },
        {
            path: "/chats",
            element: <h1>Chats</h1>,
        }
    ])


    return (
        <RouterProvider router={router} />
    )

}

