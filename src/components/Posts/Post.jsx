import React from "react";
import { motion } from "framer-motion";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";

const Post = (props) => {
  const variants = {
    open: { opacity: 0, y: "100px" },
    closed: {
      opacity: 1,
      y: 0,
      transition: { y: { type: "spring", stiffness: 50 } },
    },
  };

  const removePostHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    props.onRemove(props.id);
  };

  return (
    <Link to={`detailPage/${props.id}`}>
      <motion.li
        layout
        variants={variants}
        exit={{ opacity: 0, y: 0 }}
        className={`h-24 backdrop-blur-md bg-white/30 rounded-lg px-2 flex flex-col justify-evenly cursor-pointer relative ${classes.postListItem}`}
      >
        <span
          onClick={removePostHandler}
          className="opacity-0 absolute top-2 left-2 p-2 border border-slate-800 rounded-md hover:text-red-700 hover:border-red-700 transition-all duration-300"
        >
          <BsTrashFill className="text-sm" />
        </span>
        <p className="text-base font-thin text-pink-700">{props.name}</p>
        <p className={`text-lg font-bold ${classes.text}`}>{props.text}</p>
      </motion.li>
    </Link>
  );
};

export default Post;
