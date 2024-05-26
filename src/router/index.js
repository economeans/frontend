import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/home";
import Article from "@/pages/article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/article",
        element: <Article />,
      },
    ],
  },
]);

export default router;
