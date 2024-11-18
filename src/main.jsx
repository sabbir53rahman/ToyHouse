import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; 
import Layout from "./components/Layout/Layout"; 
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import AddToy from "./pages/AddToy/AddToy";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./components/providers/AuthProvider";
import MyToy from "./pages/MyToy/MyToy";
import PrivateRoute from "./routes/PrivateRoute";
import AllToy from "./pages/AllToy/AllToy";
import Details from "./pages/Details/Details";
import UpdateModal from "./components/UpdateModal/UpdateModal";
import NotFound from "./pages/NotFound/NotFound";
import SimpleLayout from "./components/Layout/SimpleLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/alltoys",
        element: <AllToy />,
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateModal />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
  // Use SimpleLayout for NotFound page
  {
    path: "*",
    element: (
      <SimpleLayout>
        <NotFound />
      </SimpleLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
