import React from 'react';
import './App.css';
import tasks from './ejemplos/tasks.json';
//import components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //enrutador de react para navegador


class App extends React.Component {


  //Aqui realmente posee los datos de la Tareas mediante el estado State
  state = {
    tasks: tasks
  }
  //Esta funcion debe ser ejecutada desde el submit del form de donde se quiera añadir una nueva tarea, es decir TaskForm.js
  //Mediante  props
  addTask = (task) => {
    const newTask = {
      title: task.title,
      description: task.description,
      id: this.state.tasks.length
    }
    //setState para alterar el estado actual y agregar nuevos datos
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    console.log(newTask)
    //console.log(task)
  }
  //Btn Eliminar Tarea
  deleteTask = (id) => {
    const newtasks = this.state.tasks.filter(task => task.id !== id);
    //Denuevo setState para alterar el State al nuevo arreglo de datos
    this.setState({
      tasks: newtasks
    })

    console.log(newtasks);
  }
  //checkBox
  checkDone = (id) => {
    const newTasksCheck = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: newTasksCheck
    })

  }

  // Esta pansando como parametro this.state.tasks que es un array, la validacion se hace con propTypes en Tasks.js
  // Se maneja por Enrutadores (por PATH) (Link, Router, Route, BrowserRouter)
  render() {
    return <div>
      
      <Router>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDoneI={this.checkDone}
            />
          </div>
        }}>

        </Route>

        <Route path="/posts" component={Posts}></Route>
      </Router>

    </div>
  }


}


export default App;
