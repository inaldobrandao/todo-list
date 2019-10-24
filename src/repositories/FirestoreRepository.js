import firebase from 'firebase/app';
require("firebase/firestore");

class FirestoreRepository{

    constructor(collection){
        this.collection = collection;
        this.db = firebase.firestore();
    }

    create(item){
        return new Promise((resolve, reject)=> {
            this.db.collection(this.collection).doc().set({item})
            .then(() => {
                console.log("Document successfully written!");
                resolve();
            })
            .catch(error => {
                console.error("Error writing document: ", error);
                reject(error);
            });
        })
    }

    read(id) {
        return new Promise(( resolve, reject ) => {
             this.collectionReference().doc(id)
                 .get()
                 .then(doc => {
                     if(doc.exists){
                         resolve(doc.data()); 
                     }else{
                         resolve(null);
                     }
                 })
                 .catch(err => {
                     reject(err);
                 })
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