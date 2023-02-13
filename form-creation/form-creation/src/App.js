import React, {useState} from 'react'

// const App = () => {

//   const [taskName,setTaskName]=useState("");  
//   const [description,setDescription]=useState("");
//   const [flag,setFlag]= useState(false);
//   const [priority,setPriority]=useState("");
//   const [completed,setCompleted]=useState("");

//   const [tesks,SetTasks]=useState([]);


//   const handleInputChange = (ev)=>{
//     setFlag(false)

//     if (ev.target.name === 'taskName'){
//       setTaskName(ev.target.value);
//     } else{
//       setDescription(ev.target.value);
//     }
//   }

//   const handleSubmit = (ev)=> {
//     ev.preventDefault();
//     setFlag(true)
//     if (taskName === "" || description === "") return;
//   }

//   const onChangePriority = (ev)=> {
//     if (ev.target.value === "Yes"){
//       setPriority(ev.target.value)
//     } else {
//       setPriority(ev.target.value)
//     }
//   }

//   const onChangeCompleted = (ev)=> {
//     if (ev.target.value === "Yes"){
//       setCompleted(ev.target.value)
//     } else {
//       setCompleted(ev.target.value)
//     }
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           name="taskName"
//           placeholder="Enter Task Name"
//           onChange={handleInputChange}
//         ></input>{" "}
//         <br />
//         {taskName === "" && flag && (
//           <p style={{ color: "red" }}>Task Name is required</p>
//         )}
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           onChange={handleInputChange}
//         ></input>{" "}
//         <br />
//         {description === "" && flag && (
//           <p style={{ color: "red" }}>Description is required</p>
//         )}
//         <label for="priority">Priority</label>
//         <input
//           type="radio"
//           id="priority1"
//           name="priority"
//           value="Yes"
//           onChange={onChangePriority}
//         ></input>
//         <label for="priority1">Yes</label>
//         <input
//           type="radio"
//           id="priority2"
//           name="priority"
//           value="No"
//           onChange={onChangePriority}
//         ></input>
//         <label for="priority2">No</label> <br />
//         <label for="completed">completed status</label>
//         <input
//           type="radio"
//           id="completed1"
//           name="completed"
//           value="Yes"
//           onChange={onChangeCompleted}
//         ></input>
//         <label for="completed1">Yes</label>
//         <input
//           type="radio"
//           id="completed2"
//           name="completed"
//           value="No"
//           onChange={onChangeCompleted}
//         ></input>
//         <label for="completed2">No</label> <br />
//         <button type="submit" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//       <ul>
//         <li>Task Name : {taskName}</li>
//         <li>Description : {description}</li>
//         <li>Priority : {priority}</li>
//         <li>Completed : {completed}</li>
//       </ul>
//     </div>
//   );
// }

// export default App


const App = () => {

  const [task, setTask] = useState([]);
  const [remove, removeTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: e.target.name.value,
      description: e.target.description.value,
      isPriority: e.target.isPriority.checked,
      // isPriority: e.target.isPriority1.checked,
      isComplete: e.target.isComplete.checked,
      // isComplete: e.target.isComplete1.checked,
    };

    setTask([...task, newTask]);

    e.target.name.value = "";
    e.target.description.value = "";
    e.target.isPriority.checked = "";
    e.target.isComplete.checked = "";
  };

  const handleRemove = (index) => {
    const updatedTasks = [...task];
    task.splice(index,1);
    removeTask(updatedTasks);
    console.log(remove);
  };

  // const filterPriority = (e) =>{
  //   if (e.target.name.isPriority1.checked){
  //     task.filter((item, index)=>{
  //       return index === task.isPriority.checked
  //     })
  //   }
  // }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Task Name</h1>
        <input type="text" name="name" placeholder="Task Name" className='width' />
        <h1>Task Description</h1>
        <input type="text" name="description" placeholder="Description" className='width' />
        <input type="checkbox" name="isPriority" /> Is Priority <br/>
        <input type="checkbox" name="isComplete" /> Is Completed <br/>
        <input type="submit" value="Add Task" />
      </form>
      <h1>My Tasks</h1>
      <input type="checkbox" name="isPriority1" /> {" "}
      Priority <br/>
      <input type="checkbox" name="isComplete1" /> {" "}
      Completed
      <ul>
        {task.map((task, index) => {
          if (task.name !== "" && task.description !== "")
            return (
              <li key={index}>
                <h3>Task Name : {task.name}</h3>
                <p>Desctiption : {task.description}</p>
                <p>
                  Is Priority :{" "}
                  {task.isPriority ? (
                    <input type="checkbox" name="isPriority" checked />
                  ) : (
                    <input type="checkbox" name="isPriority" />
                  )}
                </p>
                <p>
                  Is Completed :{" "}
                  {task.isComplete ? (
                    <input type="checkbox" name="isComplete" checked />
                  ) : (
                    <input type="checkbox" name="isComplete" />
                  )}
                </p>
                <button
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default App;