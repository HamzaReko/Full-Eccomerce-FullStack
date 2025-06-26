import Home from "./pages/home/Home";
import Root from "./pages/Root";

import NotFound from "./pages/NotFound";
import Cart from "./pages/cart/Cart";
import Details from "./pages/details/Details";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />

      <Route path="productdetails/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
