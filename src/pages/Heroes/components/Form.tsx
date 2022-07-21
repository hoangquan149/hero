import * as React from "react";
import { Grid, TextField, IconButton, Stack, Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useForm, Controller } from "react-hook-form";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import Modal from "../../../commons/components/Modal";
import Action from "../../../types/Action";
import Hero from "../../../types/Hero";
import useLocalStorage from "../../../hooks/useLocalStorage";
import ToaStifyService from "../../../services/ToaStifyService";

interface FormProps {
   openForm: boolean;
   closeOpenForm: () => void;
   addHero: (data: Hero) => void;
}

const validation = {
   name: {
      required: {
         value: true,
         message: "Vui lòng nhập tên",
      },
   },
   attack: {
      required: {
         value: true,
         message: "Vui lòng chỉ số tấn công",
      },
   },
   defense: {
      required: {
         value: true,
         message: "Vui lòng chỉ số phòng thủ",
      },
   },
};

export default function Form(props: FormProps) {
   const { openForm, closeOpenForm, addHero } = props;
   const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      defaultValues: {
         id: Math.floor(Math.random() * 10000),
         name: "",
         image: "",
         attack: "",
         defense: "",
      },
   });

   const [file, setFile] = React.useState<any>();
   const [actions, setActions] = React.useState<Array<Action>>([]);

   React.useEffect(() => {
      setActions([{ title: "Thêm mới", onClick: handleSubmit(onSubmit) }]);
   }, []);

   const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files: any = e.target.files;
      getBase64(files[0]).then((base64) => {
         setValue("image", base64 as string);
         setFile(base64);
      });
   };

   const getBase64 = (file: any) => {
      return new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.onload = () => resolve(reader.result);
         reader.onerror = (error) => reject(error);
         reader.readAsDataURL(file);
      });
   };

   const onSubmit = (data: Hero) => {
      if (!data) return;
      addHero(data);
      ToaStifyService.showAlertSuccess("Thêm mới thành công");
      closeOpenForm();
   };

   const removeImage = () => {
      setFile("");
      setValue("image", "" as string);
   };

   return (
      <>
         <Modal
            title="Thông tin anh hùng"
            open={openForm}
            closeModal={closeOpenForm}
            className="modal-form-hero"
            actions={actions}
         >
            <form onSubmit={handleSubmit(onSubmit)}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <Controller
                        control={control}
                        rules={validation.name}
                        name={"name"}
                        render={({ field }) => (
                           <TextField
                              size={"small"}
                              variant={"outlined"}
                              fullWidth
                              label={"Tên anh hùng"}
                              error={!!errors?.name}
                              helperText={errors?.name?.message}
                              {...field}
                           />
                        )}
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <Controller
                        control={control}
                        rules={validation.attack}
                        name={"attack"}
                        render={({ field }) => (
                           <TextField
                              size={"small"}
                              variant={"outlined"}
                              fullWidth
                              label={"Tấn công"}
                              error={!!errors?.attack}
                              helperText={errors?.attack?.message}
                              {...field}
                           />
                        )}
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <Controller
                        control={control}
                        rules={validation.defense}
                        name={"defense"}
                        render={({ field }) => (
                           <TextField
                              size={"small"}
                              variant={"outlined"}
                              fullWidth
                              label={"Phòng thủ"}
                              error={!!errors?.defense}
                              helperText={errors?.defense?.message}
                              {...field}
                           />
                        )}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <h6>Ảnh:</h6>
                     <Stack direction="row">
                        <IconButton
                           aria-label="upload picture"
                           component="label"
                        >
                           <input
                              hidden
                              name="image"
                              accept="image/*"
                              onChange={imageUpload}
                              type="file"
                           />
                           <FileUploadIcon /> <h5>Chọn ảnh</h5>
                        </IconButton>
                     </Stack>
                  </Grid>
                  <Grid item xs={12}>
                     <div className="box-image">
                        <img src={file} style={{ width: "100%" }} />
                     </div>
                     {file && (
                        <div style={{ marginTop: 10 }}>
                           <Stack direction="row">
                              <IconButton
                                 onClick={removeImage}
                                 component="label"
                                 color="error"
                              >
                                 <h5>Xóa ảnh</h5>
                              </IconButton>
                           </Stack>
                        </div>
                     )}
                  </Grid>
               </Grid>
            </form>
         </Modal>
      </>
   );
}
