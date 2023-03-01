import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";
// import MainHeader from "./components/header/MainHeader";
import PostsList from "./PostsList";

function Posts() {
  return (
    <>
      <Home />
      <PostsList />
      <Outlet />
    </>
  );
}

export default Posts;
