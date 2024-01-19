"use client"
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Provideredux({children}){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}