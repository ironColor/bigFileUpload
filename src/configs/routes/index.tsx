import { LINK_HOME, LINK_TEST } from "./routerMap";
import { RouterRecord } from "./renderRouter";
import Base from '@/pages/base'
import Test from "@/pages/test";

const RouterConfig: RouterRecord[] = [
  {
    path: LINK_HOME,
    element: <Base />
  },
  {
    path: LINK_TEST,
    element: <Test />
  }
]



export default RouterConfig;