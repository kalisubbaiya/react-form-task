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
  const [priorityCheck, setPriority] =useState(false);
  const [completedCheck, setComplete] =useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: e.target.name.value,
      description: e.target.description.value,
      isPriority: e.target.isPriority.checked,
      isComplete: e.target.isComplete.checked,
    };

    setTask([...task, newTask]);

    e.target.name.value = "";
    e.target.description.value = "";
    e.target.isPriority.checked = "";
    e.target.isComplete.checked = "";
  };

  const handleRemove = (index) => {
    task.splice(index,1);
    setTask([...task]);
  };

  const changeFilter = (e) =>{
    if (e.target.name === "isPriority1"){
      setPriority(e.target.checked)
    } else {
      setComplete(e.target.checked)
    }
  }

  const priorityUpdate = task.filter((e) =>e.isPriority===true)

  const completedUpdate = task.filter((e) =>e.isComplete===true)



  const update = (item, index) =>{
    if (item.target.name === "isPriority" || item.target.name === "isPriority1"){
      task[index].isPriority = item.target.checked;
    }
    else if (item.target.name === "isComplete" || item.target.name === "isComplete1"){
      task[index].isComplete = item.target.checked;
    }
    setTask([...task])
  }

  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={handleSubmit}>
          <h1>Task Name</h1>
          <input type="text" name="name" placeholder="Task Name" className='width' />
          <h1>Task Description</h1>
          <input type="text" name="description" placeholder="Description" className='width' /> <br />
          <input type="checkbox" name="isPriority" /> Is Priority <br/>
          <input type="checkbox" name="isComplete" /> Is Completed <br/><br />
          <button type="submit">Add Task</button>
        </form>
        <div className='filter'>
          <h1>Filter the Task</h1>
            <input type="checkbox" name="isPriority1" onChange={changeFilter}/> {" "}
            Priority <br/> <br />
            <input type="checkbox" name="isComplete1" onChange={changeFilter}/> {" "}
            Completed
        </div>
      </div>
      {priorityCheck == false && completedCheck ==false &&(
      <ul>
        {task.map((task, index) => {
          if (task.name !== "" && task.description !== ""){
            return (
              <li key={index}>
                <h3>Task Name : {task.name}</h3>
                <p>Desctiption : {task.description}</p>
                <p>
                  Is Priority :{" "}
                  {task.isPriority ? (
                    <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isPriority" onChange={(item) =>update(item, index)}/>
                  )}
                </p>
                <p>
                  Is Completed :{" "}
                  {task.isComplete ? (
                    <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isComplete" onChange={(item) =>update(item, index)}/>
                  )}
                </p>
                <button
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            );
          }
        })}
      </ul>)}
      {priorityCheck == true && (
      <ul>
        {priorityUpdate.map((task, index) => {
          if (task.name !== "" && task.description !== ""){
            return (
              <li key={index}>
                <h3>Task Name : {task.name}</h3>
                <p>Desctiption : {task.description}</p>
                <p>
                  Is Priority :{" "}
                  {task.isPriority ? (
                    <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isPriority" onClick={(item) =>update(item, index)}/>
                  )}
                </p>
                <p>
                  Is Completed :{" "}
                  {task.isComplete ? (
                    <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isComplete"  onClick={(item) =>update(item, index)}/>
                  )}
                </p>
                <button
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            );
          }
        })}
      </ul>)}
      {completedCheck ==true &&(
      <ul>
        {completedUpdate.map((task, index) => {
          if (task.name !== "" && task.description !== ""){
            return (
              <li key={index}>
                <h3>Task Name : {task.name}</h3>
                <p>Desctiption : {task.description}</p>
                <p>
                  Is Priority :{" "}
                  {task.isPriority ? (
                    <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isPriority" onClick={(item) =>update(item, index)}/>
                  )}
                </p>
                <p>
                  Is Completed :{" "}
                  {task.isComplete ? (
                    <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                  ) : (
                    <input type="checkbox" name="isComplete"  onClick={(item) =>update(item, index)}/>
                  )}
                </p>
                <button
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            );
          }
        })}
      </ul>)}
    </div>
  );
};

export default App;