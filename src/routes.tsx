import { createBrowserRouter } from "react-router-dom";
 
import App from "./App";
import { adherentRoutes } from "./pages/Adherent/routes/routes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Custom error page</h1>,
    children:[
      adherentRoutes,
    ]
  },
  ]);

