import React from "react";
import { MenuItem as MaterialMenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./style.scss";

interface MenuInfo {
   title: string;
   link: string;
   icon: any;
   key: string;
}

interface MenuItemProps {
   menuInfo: MenuInfo;
   keyActive: string;
   handleChangeKey: (key: string) => void;
}

export default function MenuItem(props: MenuItemProps): JSX.Element {
   const { menuInfo, keyActive, handleChangeKey } = props;

   return (
      <>
         <MaterialMenuItem
            className={`menu-item ${
               keyActive === menuInfo.key ? "active" : ""
            } `}
            onClick={() => handleChangeKey(menuInfo.key)}
         >
            <ListItemIcon>
               <menuInfo.icon fontSize={"small"} />
            </ListItemIcon>
            <ListItemText className={"menu-item-title"}>
               {menuInfo.title}
            </ListItemText>
         </MaterialMenuItem>
      </>
   );
}
