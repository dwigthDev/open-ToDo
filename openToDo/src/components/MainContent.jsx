import { useEffect,useState} from 'react'
import CardInfo from './CardInfo'
import Pomodoro from './Pomodoro'
import OpenChat from './OpenChat'
import ModalAddTask from './ModalAddTaks'
const MainContent = ({userData}) => {
  const [isPomodoro,setIsPomodoro] = useState(true);
  const [open, setOpen] = useState(true);
  const [taskList,setTaskList] = useState([])  

  return (
<section className="bg-gray-950 min-h-[500px] flex p-4 border border-gray-500 gap-4 ">
  {/*contenedor del lado izquierddo*/}
  <div className='max-w-[500px]'>
    <div>
    <CardInfo userData={userData} /> 
    </div>
    <div>
      <div className="block bg-gradient-to-tl from-gray-800 to-gray-700 rounded  border-gray-500   border-[1px] h-100 mt-2">
            <div className="px-4 py-2 flex justify-end">
              <button className=" p-1 rounded cursor-pointer text-1l flex items-center" onClick={() => setIsPomodoro(!isPomodoro)}>
                {isPomodoro ? "💬" : "🍅"}
              </button>
            </div>
            <div className='flex  flex-wrap justify-center'>
              {isPomodoro ? <Pomodoro /> : <OpenChat />}
            </div>
      </div>
    </div>
  </div>
  {/*contenedor del lado Derecho*/}
  <div>
    {/*Filtros de las tareas*/}
    <div className='flex gap-2 border-[1px] border-gray-500 p-3 rounded'>
      <input type="text" placeholder='filter by name' className='bg-gray-900 px-3 rounded'/>
      <select name="priority" id="sltPriority" className='bg-gray-900 px-3 rounded'>
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="mid">Mid</option>
        <option value="low">Low</option>
      </select>
      <input type="date" name="" id="" className='bg-gray-900 px-3 rounded text-white' />
      <button onClick={() => setOpen(true)} className="border  font-semibold py-1 px-2 rounded cursor-pointer text-sm flex items-center hover:bg-gray-100 hover:text-gray-900">Create New Task</button>
    </div> 
    {/*Mapeo de las tareas*/}
    {
      taskList.length === 0 ? taskList.map((task)=>{
        <div>{task.id}</div>
      }) : "no hay tareas aun"
    }
  </div>
    <ModalAddTask open={open} setOpen={setOpen} taskList={taskList} setTaskList={setTaskList}/>
</section>

  )
}

export default MainContent