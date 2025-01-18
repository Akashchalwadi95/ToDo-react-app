// import { useState } from "react";

// function App(){
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   const addTask = () =>{
//     if(task.trim()!==""){
//       setTasks([...tasks, {text:task, completed:false}]);
//       setTask("");
//     }
//   };

//   const toggleComplete = (index)=>{
//     const updatedTasks = tasks.map((t,i)=>
//     i===index?{...t,completed:!t.completed}:t);
//     setTasks(updatedTasks);
//   };
  
//   const deleteTask=(index)=>{
//     setTasks(tasks.filter((_,i)=>
//     i!==index))
//   };

//   return(
//     <div>
//       <h1>Todo List</h1>
//       <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Add List"></input>
//       <button onClick={()=>addTask()}>Add</button>

//       <ul>
//         {tasks.map((t,index)=>(
//           <li key={index}>
//             <span style={{textDecoration:t.completed?"line-through":"none"}} onClick={()=>toggleComplete(index)}>
//             {t.text}
//             </span>
//             <button onClick={()=>deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;