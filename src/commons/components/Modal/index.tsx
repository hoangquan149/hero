import React from "react";
import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";
import Action from "../../../types/Action";

interface ModalProps {
   open: boolean;
   title: string;
   closeModal: () => void;
   children: React.ReactNode;
   className: string;
   actions: Array<Action>;
}

export default function Modal(props: ModalProps) {
   const { open, title, closeModal, children, className, actions } = props;
   return (
      <div>
         <Dialog
            open={open}
            onClose={() => closeModal()}
            className={`common-modal ${className}`}
         >
            <DialogTitle className="common-modal__title">
               <div className="common-modal__header">
                  <h3 className="common-modal__text">{title}</h3>
                  <CloseIcon
                     className="common-modal__icon"
                     onClick={() => closeModal()}
                  />
               </div>
            </DialogTitle>
            <DialogContent>
               <DialogContentText component={"div"} tabIndex={-1}>
                  {children}
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               {actions.map((action, index) => {
                  return (
                     <Button
                        key={index}
                        onClick={() => action.onClick()}
                        variant="contained"
                     >
                        {action.title}
                     </Button>
                  );
               })}
            </DialogActions>
         </Dialog>
      </div>
   );
}
