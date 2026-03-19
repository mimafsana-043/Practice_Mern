import { createBrowserRouter } from "react-router";
import rootLayout from "../layout/rootLayout";
import Coverage from "../Pages/Coverage/Coverage";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path : "/",
        Component : rootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader : ()=> fetch('/serviceCenter.json').then(res => res.json())
            },
        ]
    },
]);