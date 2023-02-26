import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ModalContextProvider from "./store/modal-context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainHeader from "./routes/MainHeader";
import PostDetailPage, { loader as postsDetailLoader } from "./routes/PostDetailPage";
import PostsList, { loader as postsListLoader } from "./routes/PostsList";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { path: "/", element: <MainHeader />, children: [{ path: "detailPage/:id", element: <PostDetailPage />, loader: postsDetailLoader}, { path: "/", element: <PostsList />, loader: postsListLoader}]}
  ]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router}/>
    </ModalContextProvider>
  </React.StrictMode>
);
