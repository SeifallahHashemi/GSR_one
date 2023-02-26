import { Outlet } from "react-router-dom";
// import MainHeader from "./components/header/MainHeader";
import PostsList from "./routes/PostsList";

function App() {
  return (
    <div className="h-screen w-screen flex justify-start items-center flex-col gap-2 bg-gradient-to-r from-cyan-300 to-blue-500 text-slate-800">
      <div className="max-w-5xl w-full">
        {/* <MainHeader /> */}
        <Outlet />
        {/* <PostsList /> */}
      </div>
    </div>
  );
}

export default App;
