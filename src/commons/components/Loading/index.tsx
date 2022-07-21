import * as React from "react";
import classNames from "classnames/bind";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export default function Loading(props: any) {
   const { overlay = false } = props;
   const classes = cx("wrapper", {
      overlay,
   });

   return (
      <div className={classes}>
         <CircularProgress className={cx("icon-loading")} />
      </div>
   );
}
