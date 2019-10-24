import React, { Component } from 'react';
import TodoList from '../../components/todoList/TodoList';
import FirestoreRepository from '../../repositories/FirestoreRepository';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], description: '' };        
    }

    handleChange = (e) => {
        this.setState({ description: e.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description.length) {
          return;
        }
        const newItem = {
          description: this.state.description         
        };
        
        this.setState({ items: this.state.items.concat(newItem), description: '' });

        new FirestoreRepository("tarefas")
            .create(newItem)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <h3>Lista de Tarefas</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <input id="description" className="input" type="text" required onChange={this.handleChange} value={this.state.description} />
                        <label className="label" htmlFor="description">Nova Tarefa</label>
                    </div>
                    <button className="btn-submit">
                        Adicionar
                    </button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        );
    }
}

export default Home;