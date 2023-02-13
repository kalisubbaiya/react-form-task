// import React, { Component }  from 'react';

// class RadioInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ""
//         };
//     }

//     onChange = (event) => {
//         this.setState({ value: event.target.value });
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                 <input type="radio" name="gender" value="male" onChange={this.onChange} /> Male
//                 <input type="radio" name="gender" value="female" onChange={this.onChange} /> Female
//                 </form>
//                 <p>{this.state.value}</p>
//             </div>
//         )
//     }
// }

// export default RadioInput;

import React, { useState } from "react";

const Child = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [taskName,setTaskName]=useState("");  
const [description,setDescription]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleChange = (e) => {
    if (e.target.name === 'taskName'){
          setTaskName(e.target.value);
    } else{
            setDescription(e.target.value);
          }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        name="Taskname"
        onChange={handleChange}
        placeholder="Add task"
      />
      <input
        type="text"
        name="descripition"
        value={task}
        onChange={handleChange}
        placeholder="Add descripition"
      />
      <button type="submit">Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </form>
  );
};

export default Child;