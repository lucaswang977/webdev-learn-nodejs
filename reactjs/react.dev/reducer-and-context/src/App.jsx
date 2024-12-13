import { useState, useReducer, useContext, createContext } from "react";
import "./App.css";

const TasksContext = createContext(null);
const DispatchContext = createContext(null);

const initialTasks = [
  { id: 0, text: "Philosopher's Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(DispatchContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    dispatch({ type: "ADD_TASK", text });
    setText("");
  };
  return (
    <div className="add-task">
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

const TaskList = () => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(DispatchContext);
  const [editTask, setEditTask] = useState(null);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <input
            type="checkbox"
            onChange={() => {
              dispatch({ type: "TOGGLE_TASK", id: task.id });
            }}
            checked={task.done}
          />
          {editTask && editTask.id === task.id ? (
            <>
              <input
                type="text"
                value={editTask.text}
                onChange={(e) =>
                  setEditTask({ ...editTask, text: e.target.value })
                }
              />
              <button
                onClick={() => {
                  dispatch({
                    type: "EDIT_TASK",
                    task: { id: editTask.id, text: editTask.text },
                  });
                  setEditTask(null);
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditTask(null);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              {task.text}
              <button
                onClick={() => setEditTask({ id: task.id, text: task.text })}
              >
                Edit
              </button>
            </>
          )}

          <button
            onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length, text: action.text, done: false }];
    case "TOGGLE_TASK":
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default App;
