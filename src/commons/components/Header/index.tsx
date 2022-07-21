import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function Header() {
   return (
      <div className={cx("wrapper")}>
         <nav>
            <ul className={cx("actions")}>
               <li className={cx("actions-item")}></li>
            </ul>
         </nav>
      </div>
   );
}

export default Header;
