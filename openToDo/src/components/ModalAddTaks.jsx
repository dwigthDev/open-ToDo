import {  Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default function Example({ open, taskList, setOpen, setTaskList}) {
  const [taskName,setTaskName] = useState("");
  const [taskPriority,setTaskPriority] = useState("");
  const [taskExpiration,setTaskExpiration] = useState("");
  const [taskDescription,setTaskDescription] = useState("");

const addTaskList = () => {
  
  const newTask = {
    name: taskName,
    priority: taskPriority,
    expiration: taskExpiration,
    description: taskDescription,
    id: Date.now()
  };

  //
  setTaskList(prev => [...prev, newTask]);
  //limpiar el formulario 
  setTaskName('');
  setTaskPriority('');
  setTaskExpiration('');
  setTaskDescription('');

  // Cerrar modal
  setOpen(false);  
};



  return (  
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">
                      Create New Task
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        Upgrade your routine and take full control of your day. <br/> Start managing your tasks smarter, stay organized, and achieve more with the best productivity platform today!
                      </p>
                      {/*Inicio del formulario*/}
                      <form  className='mt-3'>
                        <div className='mb-2'>
                          <label htmlFor="titleTask" className='block text-md mb-1'>Task Name:</label>
                          <input type="text" id="taskName" placeholder='Ej: Learn SOLID with JS' className='w-full  bg-gray-900 p-1 px-3 rounded' onChange={(e)=>{setTaskName(e.target.value)}}/>
                        </div>
                        <div>
                          <label htmlFor="categoryTask" className='block text-md mb-1'>Priority:</label>
                          <select name="priority" id="sltPriority" onChange={(e)=>{setTaskPriority(e.target.value)}} className='w-full bg-gray-900 p-1 px-3 rounded'>
                            <option value="">Select Priority</option>
                            <option value="high">High</option>
                            <option value="mid">Mid</option>
                            <option value="low">Low</option>
                          </select>
                        </div>
                        <div className='mb-2'>
                          <label htmlFor="Expiration" className='block text-md mb-1' >Expiration time:</label>
                          <input type="date" onChange={(e)=>{setTaskExpiration(e.target.value)}} className='w-full  bg-gray-900 p-1 px-3 rounded'/>
                        </div>
                        <div className='mb-2'>
                          <label htmlFor="Expiration" className='block text-md mb-1' >Description:</label>
                          <textarea onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-full max-h-[100px] bg-gray-900 p-1 px-3 rounded'/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={addTaskList}
                  className="inline-flex w-full justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 cursor-pointer sm:ml-3 sm:w-auto"
                >
                    Create Task
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={()=>setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-800  px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-500 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
