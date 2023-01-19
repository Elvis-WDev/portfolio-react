import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Home, Skills, MenuButton, Portfolio, Contact } from "../components"
import { loading } from "../store/slice/PortfolioSlice";

export const PortfolioPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(loading(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Home />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}
