import { configureStore } from "@reduxjs/toolkit"
import adherentSlice from "./slices/adherent.slice"

const reducer = {
    [adherentSlice.name]: adherentSlice.reducer
}

export const store = configureStore({
    reducer
})