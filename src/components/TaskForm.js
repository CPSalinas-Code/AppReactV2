import React from 'react';

export default class TaskForm extends React.Component{
    

    state = {
        title:'',
        description:''

    }
    //Evitar que que refresque la pagina, con una funcion flecha
    //guardar datos en json
    onSubmit = (e) => {
        //console.log(this.state)
        //Ejecutar AddTask que es una funcion de App.js que interectua con el STATE del mismo.
        this.props.addTask(this.state);
        e.preventDefault();
    }

    //verificar cambio de estado en cada input
    onChange = e => {
        //console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}>
                </input>
                <br />
                <br/>

                <textarea 
                    name="description"
                    placeholder="Write a description" 
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <br/><br/>

                <button type="submit">Save Task</button>
            </form>
        )
    }
}

