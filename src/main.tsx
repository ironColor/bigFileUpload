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

const Home = () => {
  return (
    <>
      这是Home页面
    </>
  )
}

const  First = () => {
  return (
    <>
      这是页面1
    </>
  )
}
const  Second = () => {
  return (
    <>
      这是页面2
    </>
  )
}