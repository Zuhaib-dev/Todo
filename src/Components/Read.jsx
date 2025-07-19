

const Read = (props) => {
  const deleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    settodos(filtertodo);
  };
  const todos = props.todos;
  const settodos = props.settodos;
  const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="    mb-2 flex justify-between items-center p-4 rounded bg-gray-900"> 
        <span className=" text-xl font-thin">{todo.title}</span> 
        <button className=" close-btn text-sm text-red-400" onClick={() => deleteHandler(todo.id)}>Delete</button>
      </li>
    );
  });
  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl text-white font-thin" ><span className="text-pink-400">Pending</span> Todo</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
