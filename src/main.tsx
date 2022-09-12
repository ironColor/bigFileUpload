import {BrowserRouter , Routes, Route,  Link, } from 'react-router-dom';
import RouterLayout from './layout/RouteLayout';
import RouterConfig from './configs/routes';
import { renderRouters } from './configs/routes/renderRouter';

export default function Main() {
  return (
    <BrowserRouter>
      <RouterLayout></RouterLayout>
      {renderRouters(RouterConfig)}
    </BrowserRouter>
  )
}
