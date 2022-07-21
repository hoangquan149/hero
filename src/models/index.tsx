import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuProps from "../types/MenuProps";
import {LIST_PATH} from "../routes";

const APP_MENUS: MenuProps[] = [
    {
        title: 'Dashboard',
        link: LIST_PATH.DASHBOARD,
        icon: DashboardIcon,
        key: '/'
    },
    {
        title: 'Quản lý anh hùng',
        link: LIST_PATH.HEROES,
        icon: SupervisorAccountIcon,
        key: 'heroes'
    }
]


export default APP_MENUS
