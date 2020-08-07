const randomId = require('random-id')

const data = {
    todos: [
      {
        id: 1,
        task: 'task1',
        assignee: 'assignee1000',
        status: 'completed'
      },
      {
        id: 2,
        task: 'task2',
        assignee: 'assignee1001',
        status: 'completed'
      },
      {
        id: 3,
        task: 'task3',
        assignee: 'assignee1002',
        status: 'completed'
      },
      {
        id: 4,
        task: 'task4',
        assignee: 'assignee1000',
        status: 'completed'
      },
      
    ]
  };

  module.exports = {
    getToDos: function() {
        return data.todos;
    },
    addToDo: function(task) {
        task.id = randomId(10);
        data.todos.push(task);
        return {
            message: "task added",
            tasks: data.todos.length
        }
    },
    deleteToDos: function(id) {
        data.todos = data.todos.filter(todo => todo.id != id)
        return {
            message: "task deleted",
            tasks: data.todos.length
        }
    },
    editTodos: function(task) {
        data.todos = data.todos.map(todo => {
            if (todo.id == task.id) todo = task;
            return todo;
        });
        return {
            message: "task edited",
            tasks: data.todos.length
        }
    }
  }