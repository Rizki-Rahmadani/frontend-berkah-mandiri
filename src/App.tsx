import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./pages/Auth/login";
import { Register } from "./pages/Auth/register";
import { PrivateLayout } from "./pages/Layout/private-layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      HydrateFallback: () => <div>Loading...</div>,
    },
    {
      path: "/register",
      element: <Register />,
      HydrateFallback: () => <div>Loading...</div>,
    },
    {
      path: "/",
      element: <PrivateLayout />,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
