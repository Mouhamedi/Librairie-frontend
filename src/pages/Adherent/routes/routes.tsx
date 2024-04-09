import AdherentList from "@/features/adherents/components/AdherentList";
import { RouteObject } from "react-router-dom";

export const adherentRoutes: RouteObject = {
    path: "adherents",
    element: <AdherentList/>,
    children: [
        {
            path: "",
            element: <AdherentList />
        }
    ]
};
