import React, { Component } from 'react';
import FirestoreRepository from '../../repositories/FirestoreRepository';

class TodoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            listaTarefas : []
        }
    }

    componentDidMount(){
        const ref = new FirestoreRepository("tarefas").collectionReference();
        const self = this;
        ref
        .orderBy("createAt", "asc")
        .onSnapshot(tarefas => {
            var listaTarefas = [];
            tarefas.forEach(item => {
                listaTarefas.push(item.data());
            });
            self.setState({ listaTarefas })
        });
    }

    render() {
        return(
            <div>
                <ul>
                    {/* {this.props.items.map( (item, key) => (
                        <li key={key}>{item.description}</li>
                    ))} */}
                    {this.state.listaTarefas.map( (item, key) => (
                        <li key={key}>
                            {item.description}
                            <button className="btn-delete" onClick={() => this.props.deleteTask(item)}>
                                Deletar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
