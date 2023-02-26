import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../store/modal-context";
import Modals from "../components/Modals/Modals";
import NewPostForm from "../components/Posts/NewPostForm";
import Post from "../components/Posts/Post";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const variantsList = {
  open: {
    transition: { staggerChildren: 0.7, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.5 },
  },
};

/* const variantsList = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 0.5 },
  },
}; */

const PostsList = () => {
  const ctx = useContext(ModalContext);
  // const [posts, setPosts] = useState([]);
  const posts = useLoaderData();
  // const [isFetching, setIsFetching] = useState(false);
  const addNewPostHandler = async (data) => {
    // setIsFetching(true);
    // setPosts(prevState => [...prevState, data])
    const response = await fetch(
      "https://react-todo-54e07-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const addedData = await response.json();
    // setIsFetching(false);
  };

  /* useEffect(() => {
    const sendRequest = async () => {
      setIsFetching(true);
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
      setPosts(transformedData);
      console.log(transformedData);
    };
    try {
      sendRequest().then((data) => {
        setIsFetching(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []); */
  return (
    <>
      {ctx.isShownModal && (
        <Modals>
          <NewPostForm onAddPost={addNewPostHandler} />
        </Modals>
      )}
      <motion.ul
        className="grid grid-cols-3 grid-flow-row-dense gap-x-2 gap-y-2 auto-rows-max py-2"
        variants={variantsList}
        initial={"open"}
        animate={"closed"}
      >
        {posts.map((post) => (
          <Post key={post.id} name={post.name} text={post.text} id={post.id} />
        ))}
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
