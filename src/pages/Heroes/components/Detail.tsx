import { Typography } from "@mui/material";

import Modal from "../../../commons/components/Modal";
import Hero from "../../../types/Hero";

interface DetailProps {
   openDetail: boolean;
   closeOpenDetail: () => void;
   heroDetail: Hero;
}

export default function Detail(props: DetailProps) {
   const { openDetail, closeOpenDetail, heroDetail } = props;
   return (
      <>
         <Modal
            open={openDetail}
            closeModal={closeOpenDetail}
            title="Chi tiết anh hùng"
            className="modal-detail"
            actions={[]}
         >
            <div>
               <img
                  src={heroDetail.image}
                  style={{ width: "100%", height: 200 }}
               />
               <Typography>Id: {heroDetail.id}</Typography>
               <Typography>Tên anh hùng: {heroDetail.name}</Typography>
               <Typography>Tấn công: {heroDetail.attack}</Typography>
               <Typography>Phòng thủ: {heroDetail.defense}</Typography>
            </div>
         </Modal>
      </>
   );
}
