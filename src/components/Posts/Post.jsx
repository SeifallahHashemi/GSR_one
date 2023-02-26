import React from "react";
import { motion } from "framer-motion";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  const variants = {
    open: { opacity: 0, y: "100px" },
    closed: {
      opacity: 1,
      y: 0,
      transition: { y: { type: "spring", stiffness: 50 } },
    },
  };
  return (
    <Link to={`detailPage/${props.id}`}>
      <motion.li
        variants={variants}
        className="h-24 backdrop-blur-md bg-white/30 rounded-lg px-2 flex flex-col justify-evenly cursor-pointer"
      >
        <p className="text-base font-thin text-pink-700">{props.name}</p>
        <p className={`text-lg font-bold ${classes.text}`}>{props.text}</p>
      </motion.li>
    </Link>
  );
};

export default Post;
