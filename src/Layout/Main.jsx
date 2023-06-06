import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Header from "../Pages/shared/Header";


const Main = () => {
    return (
        <div className="  ">
            <Header></Header>
          <div className="container mx-auto">
          <Outlet></Outlet>
        
          </div>
          <Footer></Footer>
            
        </div>
    );
};

export default Main;