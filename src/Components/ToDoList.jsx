import React , {useState} from 'react'

export default function ToDoList() {

    let [getvalue, setGetvalue] = useState("");
    let [task, setTask] = useState([]);
    function click() {
        if (getvalue.trim() !== "") {
            if (task.includes(getvalue.trim())) {
                alert("Task Is Already Exist");
            } else {
                setTask([...task, getvalue])
                setGetvalue("")
            }
        } else {
            alert("Task Invalid");
            setGetvalue("")
        }
    }
    function remove_task(index) {
        if (window.confirm("Are You Sure You Want To Delete This Tsk")) {
            setTask(task.filter((a, i) => i !== index))
        }
    }


  return (
    <div className='container py-4'>
  <h1 className="text-center text-dark mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem"  }}>
      To-Do List
      </h1>
    <input className='form-control my-3'
        placeholder='Enter Your Task'
        type="text"
        value={getvalue}
        onChange={(e) => { setGetvalue(e.target.value) }}
        required />
    <button className='btn btn-warning' onClick={click}>Click To Add Task</button>
    <h3 className='mt-3'>Your Task List</h3>
    <div>
        {task.length === 0 ? (
            <p>No Task</p>
        ) : (
            task.map((a, i) => (
                <li>{a}
                    <button className='btn btn-danger mx-3 my-2' onClick={() => remove_task(i)}><i class="bi bi-trash">Delete</i></button>
                </li>
            )
            )
        )

        }
    </div>
  </div>
  )
}