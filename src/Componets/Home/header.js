import React,{useEffect} from "react";
import "../styles/Header.scss";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // if(location.pathname ==='/piano'){
   
  // }



 
  return (
    <>  
      <div className="container" >
        <div className="header_container">
          <h2 onClick={() => navigate("/")}>play games</h2>
        </div>
        <div className="links_of_gamaes">
          <h3 className="link" onClick={() => navigate("/CandyCursh")}>
            CandyCrush
          </h3>
          <h3 className="link" onClick={() => navigate("/bird_flap")}>
            FlappyBird
          </h3>
          <h3 className="link" onClick={() => navigate("/Box")}>
            Tic tac Toe{" "}
          </h3>
          <h3 className="link" onClick={() => navigate("/key")}>
            keyboard Tester
          </h3>
          <h3 className="link" onClick={() => navigate("/piano")}>
            play piano
          </h3>
        
        </div>
      </div>
    </>
  );
};

export default Header;
