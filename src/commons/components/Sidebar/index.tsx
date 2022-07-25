import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "../MenuItem";
import APP_MENUS from "../../../models";
import "./style.scss";

function SideBar() {
   const navigate = useNavigate();
   const [keyActive, setKeyActive] = useState<string>(APP_MENUS[0].key);

   useEffect(() => {
      if (window.location.pathname) {
         if (window.location.pathname === "/") {
            setKeyActive(APP_MENUS[0].key);
         } else {
            setKeyActive(window.location.pathname.slice(1));
         }
      }
   }, []);

   const handleChangeKey = (key: string): void => {
      if (!key) return;
      setKeyActive(key);
      navigate(key);
   };

   return (
      <div className={"sidebar-wrapper"}>
         <div className={"sidebar-title"}>HEROES</div>
         <MenuList>
            {APP_MENUS.map((menuInfo, index) => (
               <MenuItem
                  key={index}
                  menuInfo={menuInfo}
                  keyActive={keyActive}
                  handleChangeKey={handleChangeKey}
               />
            ))}
         </MenuList>
      </div>
   );
}

export default SideBar;
