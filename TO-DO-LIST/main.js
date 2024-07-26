  const todoList = [];

  function addTodo()
  {
   const chore = document.querySelector('.js-input');
   
   todoList.push(chore.value);
   console.log(todoList);

   chore.value = '';
  }
