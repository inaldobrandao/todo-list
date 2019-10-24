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
        // new FirestoreRepository("tarefas")
        // .read()
        // .then(lista => {
        //     console.log(lista);
        //     this.setState({ listaTarefas : lista })
        // })
        // .catch(err => console.error(err))
        const ref = new FirestoreRepository("tarefas").collectionReference();
        const self = this;
        ref.onSnapshot(tarefas => {
            var listaTarefas = [];
            tarefas.forEach(function(item) {
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
                        <li key={key}>{item.description}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
