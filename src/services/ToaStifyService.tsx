import { toast } from "react-toastify";
import { DEFAULT_OPTIONS } from "../utils/constants";

class ToaStify {
   showAlertSuccess(message: string = "") {
      return toast.success(message, DEFAULT_OPTIONS);
   }
}
const ToaStifyService = new ToaStify();
export default ToaStifyService;
