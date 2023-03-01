import React, { useEffect, useState } from "react";
import Post from "../components/Posts/Post";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData, useNavigate } from "react-router-dom";

const variantsList = {
  open: {
    transition: { staggerChildren: 0.7, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.5 },
  },
};

const PostsList = () => {
  const posts = useLoaderData();
  const [postsItem, setPostsItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPostsItem(posts)
  }, [posts])

  const removePostHandler = async (id) => {
    const updatedPosts = postsItem.filter((post) => post.id !== id);
    await fetch(
      "https://react-todo-54e07-default-rtdb.firebaseio.com/posts.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedPosts),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setPostsItem(updatedPosts);
    navigate("/")
  };

  return (
    <>
      <motion.ul
        className="grid xl:grid-cols-3 lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-x-2 md:gap-y-2 gap-y-2 lg:auto-rows-max py-2"
        variants={variantsList}
        initial={"open"}
        animate={"closed"}
        layout
      >
        <AnimatePresence>
          {postsItem.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              text={post.text}
              id={post.id}
              onRemove={removePostHandler}
            />
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
};

export default PostsList;

export async function loader() {
  const response = await fetch(
    "https://react-todo-54e07-default-rtdb.firebaseio.com/posts.json"
  );
  if (!response.ok) {
    throw new Error(response.message || "something went wrong");
  }
  const data = await response.json();
  let transformedData = [];
  for (const key in data) {
    transformedData.push({
      id: key,
      name: data[key].name,
      text: data[key].text,
    });
  }
  return transformedData;
}
