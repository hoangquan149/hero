import _ from "lodash";
import { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InfoIcon from "@mui/icons-material/Info";
import Filter from "./components/Filter";
import BoxContentPage from "../../commons/components/BoxContentPage";
import Form from "./components/Form";
import Detail from "./components/Detail";
import Hero from "../../types/Hero";
import useLocalStorage from "../../hooks/useLocalStorage";
import "../../styles/pages/Heroes.scss";

export default function Heroes() {
   const { save, get } = useLocalStorage();
   const [listHero, setListHero] = useState<Array<Hero>>(() => get());
   const [openForm, setOpenForm] = useState<boolean>(false);
   const [openDetail, setOpenDetail] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(true);

   const filterRef = useRef<Array<Hero>>();

   const detailHeroRef = useRef<any>();

   useEffect(() => {
      if (!_.isEmpty(filterRef.current)) return;
      save(listHero);
   }, [listHero]);

   useEffect(() => {
      let timeout = setTimeout(() => {
         setLoading(false);
      }, 400);
      return () => clearTimeout(timeout);
   }, []);

   const onSearch = (params: any) => {
      let newData: Hero[] = [];
      if (params && !params.name) {
         newData = get();
         setListHero(newData);
         filterRef.current = [];
      } else {
         newData = [...listHero].filter((hero, index) => {
            return hero.name.includes(params.name);
         });
         filterRef.current = newData;
         setListHero(newData);
      }
   };

   const addHero = (data: Hero) => {
      const newData: Array<Hero> = [...listHero];
      newData.unshift(data);
      setListHero(newData);
      filterRef.current = [];
   };

   const onOpenForm = (): void => {
      setOpenForm(true);
   };

   const closeOpenForm = (): void => {
      setOpenForm(false);
   };

   const onOpenDetail = (id: number): void => {
      const hero = [...listHero].find((hero) => hero.id === id);
      detailHeroRef.current = hero;
      setOpenDetail(true);
   };

   const closeOpenDetail = (): void => {
      setOpenDetail(false);
   };

   const columns = [
      {
         field: "id",
         headerName: "ID",
         width: 70,
         renderCell: (params: any) => {
            return (
               <>
                  {params.value}
                  <Button
                     title="Chi tiết"
                     style={{
                        padding: 0,
                        minWidth: "unset",
                        height: "unset",
                        paddingLeft: 1,
                     }}
                     onClick={() => onOpenDetail(params.value)}
                  >
                     <InfoIcon />
                  </Button>
               </>
            );
         },
      },
      {
         field: "image",
         headerName: "Ảnh",
         renderCell: (params: any) => (
            <img
               style={{ width: 50, height: "100%", borderRadius: "100%" }}
               src={params?.value}
            />
         ),
         width: 100,
      },
      { field: "name", headerName: "Tên anh hùng", width: 200 },
      { field: "attack", headerName: "Tân công", width: 200 },
      { field: "defense", headerName: "Phòng thủ", width: 200 },
   ];

   return (
      <>
         <Filter onOpenForm={onOpenForm} onSearch={onSearch} />
         <BoxContentPage
            title={"Danh sách anh hùng"}
            className={"box-list-heroes"}
         >
            <div className={"box-content-heroes"}>
               <DataGrid
                  loading={loading}
                  rows={listHero}
                  columns={columns}
                  disableSelectionOnClick
                  hideFooter
                  rowsPerPageOptions={[]}
               />
            </div>
         </BoxContentPage>
         {openForm && (
            <Form
               openForm={openForm}
               closeOpenForm={closeOpenForm}
               addHero={addHero}
            />
         )}

         {openDetail && (
            <Detail
               openDetail={openDetail}
               closeOpenDetail={closeOpenDetail}
               heroDetail={detailHeroRef.current}
            />
         )}
      </>
   );
}
