import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';


//Se esta pasando como parametro en la creacion de cada componente un dato de tipo OBJECT (task={task}), validacion en Task.js
class Tasks extends React.Component{
    render(){
        return  this.props.tasks.map(task=>
            //Todo dentro de Task se considera como PROPS
        <Task 
            task={task} 
            deleteTask={this.props.deleteTask} 
            key={task.id}
            checkDoneII={this.props.checkDoneI}
        />)
    }
}
//Validacion de que los datos que recibe sean de tipo array
Tasks.propTypes ={
    tasks: PropTypes.array.isRequired
}

export default Tasks;