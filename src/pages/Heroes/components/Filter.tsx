import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import HeroSearch from "../../../types/HeroSearch";
interface FilterProps {
   onOpenForm: () => void;
   onSearch: (data: HeroSearch) => void;
}

export default function Filter(props: FilterProps) {
   const { control, handleSubmit, getValues, reset } = useForm({
      defaultValues: {
         name: "",
      },
   });
   const { onOpenForm, onSearch } = props;

   const resetForm = () => {
      reset();
      onSearch(getValues());
   };

   return (
      <div style={{ marginTop: 10 }}>
         <form onSubmit={handleSubmit(onSearch)}>
            <Grid container spacing={1}>
               <Grid item md={2} xs={12} sm={2}>
                  <Button
                     onClick={() => onOpenForm()}
                     variant="outlined"
                     className="w-100"
                     color="success"
                  >
                     Thêm mới
                  </Button>
               </Grid>
               <Grid item md={4} xs={12} sm={3}></Grid>
               <Grid item md={4} xs={6} sm={4}>
                  <Controller
                     control={control}
                     name={"name"}
                     render={({ field }) => (
                        <TextField
                           size={"small"}
                           variant={"outlined"}
                           fullWidth
                           label={"Tìm kiếm..."}
                           {...field}
                        />
                     )}
                  />
               </Grid>
               <Grid item md={2} xs={6} sm={3}>
                  <div className="d-flex">
                     <Button
                        title="Reset tìm kiếm"
                        className="common-btn-reset"
                        onClick={() => resetForm()}
                     >
                        <RestartAltIcon />
                     </Button>
                     <Button
                        type="submit"
                        variant="outlined"
                        className="w-100 common-btn-search"
                     >
                        Tìm kiếm
                     </Button>
                  </div>
               </Grid>
            </Grid>
         </form>
      </div>
   );
}
