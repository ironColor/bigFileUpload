import { ReactComponentElement } from "react";
import { RouteProps, Route, Routes } from "react-router-dom";

export interface RouterRecord extends RouteProps {
  key?: string;
  /** 静态标题 */
  title?: string;
  /** 是否需要认证，默认需要 */
  requireAuth?: boolean;
  /** 模块对应的icon地址 */
  icon?: string;
  /** 是否缓存页面，默认都缓存，不缓存时改用css样式控制页面显隐 */
  keepAlive?: boolean;
  /** 子路由配置 */
  routes?: RouterRecord[];
  element: ReactComponentElement<any>
}


export const renderRouters = (routers: RouterRecord[]) => {
  return (
    <Routes>
      {
        routers.map((router, i) => {
          return (
            <Route
              key={router.key || i}
              path={router.path}
              element={router.element}
            />
          )
        })
      }
    </Routes>
  )
}