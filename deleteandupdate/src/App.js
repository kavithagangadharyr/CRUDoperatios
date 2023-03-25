import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons' 


function App() {
  //List of the items 
  const[toDo, setTodo] = useState([

  ]);

  //MakingnewTaks, updating
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateTask] = useState('');

  //Add task
  const addTask =() => {
    if(newTask) {
      // to add new id number
      // let num = toDo.length + 1;
      let newItem = {id: toDo.length + 1, title: newTask, status: false}
      
      //Two array are merged to gather by doing like this
      setTodo([...toDo, newItem]);
      setNewTask('');

    }
  } 

  //DeleteTask, id to identify
  const deleteTask = (id) => {
    let newListArry = toDo.filter(allID => allID.id != id)
    setTodo(newListArry);
  }

  //cancelUpdate
  const cancelUpdate = (id) => {

  }

  //changeTask, id to identify, e for the eventUpdate
  const changeTask = (e) => {

  }

  //Also to mark the task which are done
  const markDone = (id) => {
    let newTask = toDo.map((element) => {
      if(element.id === id) {
        return({...element, status: !element.status})
      }
      return element
    })
    setTodo(newTask)
  }

  //updateTask task which are done
  const updateTasks = () => {

  }

  return (
    //here we create add button and input field to add item
    <div className="container App">
      <h1>To Do List</h1>
      <div className='addItemDiv'>
        <div className='col'>
          <input 
            value={newTask}
            onChange= {(e) => setNewTask(e.target.value)}
            className='form-control form control-lg'/>
        </div>

        <div className='col-auto'>
          <button 
            onClick={addTask}
            className='btn btn-lg btn-success'>
            
            Add Task
          </button>
        </div>
      </div>




      {toDo && toDo.length ? '' : 'No tasks'}
      {toDo && toDo.map((task, index) => {
          return(
            <React.Fragment key={task.id}>
              <div className='col taskBg'>
                {/* if the task status is false then it will show task triked */}
                <div className={task.status ? 'done': ''}>
                  <span  className='taskText'>{task.title}</span>
                </div>
                {/* Below is icons for edit update.... */}
                <div className='iconsWrap'>
                  <span 
                    onClick={() => {markDone(task.id)}}
                    title='Completed/ Not Completed'>

                    <FontAwesomeIcon icon={faCircleCheck}/>
                  </span>
                  {task.status ? null : (
                    <span 
                    onClick={() => setUpdateTask({
                      id: task.id,
                      title: task.title,
                      status: task.status ? true : false
                    })

                    }
                      title='Edit'>
                      <FontAwesomeIcon icon={faPen}/>
                    </span>                      
                  )}

                  <span 
                    onClick={() => {
                      deleteTask(task.id)
                    }}
                    title='Delete'>
                  <FontAwesomeIcon icon={faTrashCan}/>
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
      })}
    </div>
  );
}

export default App;