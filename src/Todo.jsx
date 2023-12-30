import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([
    { id: uuidv4(), task: "code", date: Date().toString().slice(4, 10) },
  ]);

  function submitHandler(e) {
    e.preventDefault();
    let entry = {
      id: uuidv4(),
      task: task,
      date: new Date().toString().slice(4, 10),
    };
    setTaskArr((prev) => {
      return [...prev, entry];
    });
    setTask("");
  }

  let delTodo = (id) => {
    setTaskArr((prev) =>
      prev.filter((e) => {
        return e.id != id;
      })
    );
  };

  let strikeOut = (id) => {
    setTaskArr((prev) =>
      prev.map((e) => {
        if (e.id == id) {
          return {
            ...e,
            task: <s>{e.task}</s>,
          };
        } else {
          return e;
        }
      })
    );
  };

  return (
    <>
      <h1>TODO APP</h1>
      <div className="input-container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Code today for 2 hrs!"
          />
          <button>Add Task!</button>
        </form>
      </div>
      <hr />
      <div className="task-container">
        <div className="container">
          <h3 id="no">Task no</h3>
          <h3 id="desc">Description</h3>
          <h3 id="date">Date</h3>
          <h3 id="comp">Completed</h3>
          <h3 id="remove">Remove</h3>
        </div>
        {taskArr.map((e) => {
          return (
            <div key={e.id} className="container">
              <h3 id="no" style={{ textAlign: "center" }}>
                {taskArr.indexOf(e) + 1}
              </h3>
              <h3 id="desc">{e.task}</h3>
              <h3 id="date">{e.date}</h3>
              <h3 id="comp">
                <button onClick={() => strikeOut(e.id)}> Completed</button>
              </h3>
              <h3 id="remove">
                <button onClick={() => delTodo(e.id)}>Remove</button>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
