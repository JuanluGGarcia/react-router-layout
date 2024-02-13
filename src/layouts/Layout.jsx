import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
    return <>
        <Header />
        {/* Outlet es lo que tengo en Router, es decir, section y contact */}
        <Outlet /> 
    </>
};

export default Layout;