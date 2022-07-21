import {lazy, FC} from "react";
import RouteProps from '../types/RouteProps'

const Index:FC = lazy(() => import('../pages/Index'))
const Dashboard: FC = lazy(() => import('../pages/Dashboard'))
const Heroes: FC = lazy(() => import('../pages/Heroes'))

const LIST_PATH = {
   INDEX: '/*',
   DASHBOARD: "/",
   HEROES: "/heroes",
};

const PUBLIC_ROUTES: RouteProps[] = [
   {
      path: LIST_PATH.INDEX,
      component: Index,
   }
];

const PRIVATE_ROUTES: RouteProps[] = [
   {
      path: LIST_PATH.DASHBOARD,
      component: Dashboard
   },
   {
      path: LIST_PATH.HEROES,
      component: Heroes
   },
];

export { LIST_PATH, PRIVATE_ROUTES, PUBLIC_ROUTES };
