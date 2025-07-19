import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {register, handleSubmit,reset,formState :{ errors},
}= useForm()

  const submitHandler = (data) => {
   
    const newTodo = {
      id: nanoid(),
      // title: title,
      isComplete: false,
    };
  };

  return (
    <div className=" w-[60%] p-10 mx-auto ">
      <h1 className=" mb-10 text-5xl text-white font-thin">
        Set <span className="text-red-400">Reminders</span> for <br /> Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-b w-full font-light text-2xl p-2 outline-0 "
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <br /> <br />
        <button className=" create-btn bg-green-700 text-white-900 text-xl px-10 py-2 border rounded-lg   mt-10">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default create;
