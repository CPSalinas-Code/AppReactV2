import React from 'react';
import PropTypes from 'prop-types';


class Task extends React.Component{
    
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done?'black':'blue',
            textDecoration: this.props.task.done? 'line-through' : 'none'
        }
    }

    render(){
        const {task} = this.props;

        return <div style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDoneII.bind(this, task.id)}></input>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>Eliminar Tarea</button>

        </div>

        
    }
}
//Validacion de que los datos que se obtienen sean de tipo Objeto
Task.propTypes = {
    task: PropTypes.object.isRequired

}

const btnDelete ={
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}
export default Task;