import React,{useState} from "react";

const Formulario = () =>{
        const [val, setVal] = useState("");
        const [tasks, setTasks] = useState([]);

        const addTask = (e) => {
            e.preventDefault();
            setTasks([
            ...tasks,
            {
                miniTask: val,
                done: false,
            },
                ]);
            setVal("");
        };

        const checkHandler = (index) => {
            const newTask = {
            ...tasks[index],
            };
            newTask.done = !newTask.done;
            setTasks(
                [...tasks.slice(0, index), newTask].concat(tasks.slice(index + 1))
            );
        }; 

        const deleteHandler = (index) => {
            setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
        };

        return (
            <div>
                <form onSubmit={addTask}>
                <input value={val} onChange={(e) => setVal(e.target.value)} className = "form-group" placeholder="Ingresa una tarea"></input>
                < button className="btn btn-success">Add</button>
                </form>
            {tasks.map((item, i) => (
                <div key={i}>
                <p style={{ textDecoration: item.done && "line-through" }}>
                    {item.miniTask}
                    <input
                    type="checkbox"
                    checked={item.done}
                    onChange={(e) => checkHandler(i)}
                    readOnly
                    ></input>
                    <button onClick={(e) => deleteHandler(i)} className = "btn btn-warning">Delete</button>
                </p>
                </div>
            ))}
            </div>
        );
        };
export default Formulario;