import Main from "../Layout/Main";
import AllPackages from "../pages/AllPackages";
import Booking from "../pages/Booking";
import BookingInfo from "../pages/BookingInfo";
import ChooseDestination from "../pages/ChooseDestination";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SelectedPlaces from "../pages/SelectedPlaces";
import SignUp from "../pages/SignUp";
import PrivatePage from "../PrivatePage/PrivatePage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <ChooseDestination></ChooseDestination>,
      },
      {
        path: "/allPackages",
        loader: () => fetch("https://go-travlers-server.vercel.app/allPlaces"),
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/destination/:name",
        loader: ({ params }) =>
          fetch(
            `https://go-travlers-server.vercel.app/destination/${params.name}`
          ),
        element: <SelectedPlaces></SelectedPlaces>,
      },
      {
        path: "/places/:id",
        element: (
          <PrivatePage>
            <Booking></Booking>
          </PrivatePage>
        ),
      },
      {
        path: "/bookingInfo",
        element: <BookingInfo></BookingInfo>,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
