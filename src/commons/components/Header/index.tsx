import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import APP_MENUS from "../../../models";

function Header() {
   const navigate = useNavigate();

   const navigatePage = (path: string) => {
      navigate(path);
   };

   return (
      <div className={"header-wrapper"}>
         <nav>
            <ul className={"header-actions"}>
               {APP_MENUS.map((menu, index) => (
                  <li
                     className={"header-actions-item"}
                     onClick={() => navigatePage(menu.link)}
                     style={{ cursor: "pointer" }}
                  >
                     {menu.title}
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
}

export default Header;
