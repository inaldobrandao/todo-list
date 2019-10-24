import firebase from 'firebase/app';
require("firebase/firestore");

class FirestoreRepository{

    constructor(collection){
        this.collection = collection;
        this.db = firebase.firestore();
    }

    collectionReference(){
        return this.db.collection(this.collection);
    }

    create(item){
        return new Promise((resolve, reject)=> {
            const ref = this.collectionReference().doc();
            item['id'] = ref.id;

            ref.set(item)
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        })
    }

    read() {
        return new Promise(( resolve, reject ) => {
            this.collectionReference()
                .onSnapshot(tarefas => {
                    console.log(tarefas)
                    var listaTarefas = [];
                    tarefas.forEach(function(item) {
                        listaTarefas.push(item.data());
                    });
                    resolve(listaTarefas);
                });
        }); 
     }
 
     delete(id){
         return new Promise((resolve, reject) => {
             this.collectionReference().doc(id).delete()
                 .then(() => {
                     resolve();
                 }).catch( err => {
                     reject(err);
                 });
         });
     }
}

export default FirestoreRepository;