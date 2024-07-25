document.addEventListener('DOMContentLoaded',()=>{
  const taskInput=document.getElementById('task');
  const addTaskButton=document.getElementById('add');
  const taskList=document.getElementById('taskList');

  const clearCompletedButton=document.getElementById('clearTask');

  addTaskButton.addEventListener('click',()=>{
    const taskText=taskInput.value.trim();
    if(taskText!='')
    {
      addTask(taskText);
      taskInput.value='';
      taskInput.focus();

    }
  });

  taskInput.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
    {
      const taskText=taskInput.value.trim();
      if(taskText!='')
        {
          addTask(taskText);
          taskInput.value='';
          taskInput.focus();
    
        }
    }
  });

  clearCompletedButton.addEventListener('click',()=>{
    const tasks = document.querySelectorAll('li.completed');
        tasks.forEach(task => task.remove());
  });

  function addTask(taskText){
    const li=document.createElement('li');
    li.innerHTML=taskText;

    const markButton=document.createElement('button');
    markButton.textContent='Mark';

    markButton.addEventListener('click',()=>{
      li.classList.toggle('completed');
    });

    li.appendChild(markButton);
    
    taskList.appendChild(li);
  }
});