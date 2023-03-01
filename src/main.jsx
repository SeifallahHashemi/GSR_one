import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as postsDetailLoader } from "./routes/PostDetailPage";
import { loader as postsListLoader } from "./routes/PostsList";
import Loading from "./components/loading-spinner/Loading";
import { action as newPostAction } from "./routes/NewPostForm";

const PostDetailPage = lazy(() => import("./routes/PostDetailPage"));
const RootLayout = lazy(() => import("./routes/RootLayout"));
const Posts = lazy(() => import("./routes/Posts"));
const NewPostForm = lazy(() => import("./routes/NewPostForm"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        ),
        loader: postsListLoader,
        children: [
          {
            path: "/detailPage/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <PostDetailPage />
              </Suspense>
            ),
            loader: postsDetailLoader,
          },
          {
            path: "/createPost",
            element: (
              <Suspense fallback={<Loading />}>
                <NewPostForm />
              </Suspense>
            ),
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); */
