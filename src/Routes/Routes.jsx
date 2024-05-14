import { createBrowserRouter } from "react-router-dom";
import AddService from "../Pages/AddService";
import BookService from "../Pages/BookService";
import BookedServices from "../Pages/BookedServices";
import EditService from "../Pages/EditService";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ManageService from "../Pages/ManageService";
import Register from "../Pages/Register";
import Root from "../Pages/Root";
import ServiceDetail from "../Pages/ServiceDetail";
import ServiceToDo from "../Pages/ServiceToDo";
import Services from "../Pages/Services";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://event-day-server.vercel.app/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://event-day-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://event-day-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookService></BookService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://event-day-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
        loader: () => fetch("https://event-day-server.vercel.app/services"),
      },
      {
        path: "/editService/:id",
        element: (
          <PrivateRoute>
            <EditService></EditService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://event-day-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            {" "}
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://event-day-server.vercel.app/bookedServices"),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://event-day-server.vercel.app/bookedServices"),
      },
    ],
  },
]);
export default router;
