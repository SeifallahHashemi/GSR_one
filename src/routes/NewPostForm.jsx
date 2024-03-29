import React, { useContext, useRef } from "react";
import { ModalContext } from "../store/modal-context";
import Modals from "../components/Modals/Modals";
import { Form, redirect } from "react-router-dom";

function NewPostForm(props) {
  /* const ctx = useContext(ModalContext);
  const nameInputRef = useRef();
  const textInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: nameInputRef.current.value,
      text: textInputRef.current.value,
      id: Math.random().toString(36),
    };
    props.onAddPost(userData);
    ctx.onHideModal();
  }; */
  return (
    <Modals>
      <Form
        method="post"
        className="2xl:h-[50vh] 2xl:w-[30vw] bg-[#73ebb2] flex justify-start items-center flex-col gap-4 rounded-md p-4"
      >
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <label htmlFor="nameField" className="text-[#317987]">
            نام
          </label>
          <input
            type="text"
            id="nameField"
            name="name"
            className="px-[2px] bg-[#d6f9f2] rounded-md h-8 text-cyan-800 text-sm w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <label htmlFor="textField" className="text-[#317987]">
            متن
          </label>
          <textarea
            id="textField"
            name="text"
            rows={8}
            cols={45}
            className={
              "bg-[#d6f9f2] text-cyan-800 text-sm px-[2px] w-full rounded-md h-40"
            }
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-10 py-2 border border-[#d6f9f2] hover:border-transparent hover:bg-[#d6f9f2] hover:text-cyan-800 transition-all duration-300 ease-linear"
          >
            ارسال
          </button>
        </div>
      </Form>
    </Modals>
  );
}

export default NewPostForm;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(
    "https://react-todo-app-920a7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
    {
      method: "POST",
      body: JSON.stringify({...postData, id: Math.random().toString(32)}),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return redirect("/");
}
