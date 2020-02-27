import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBDje8nqMBbkMcmlKr3kQzP4CVnz7sOP-c",
    authDomain: "crown-clothing-gmeher360.firebaseapp.com",
    databaseURL: "https://crown-clothing-gmeher360.firebaseio.com",
    projectId: "crown-clothing-gmeher360",
    storageBucket: "crown-clothing-gmeher360.appspot.com",
    messagingSenderId: "836127294591",
    appId: "1:836127294591:web:9949181ad01a86161cab4a",
    measurementId: "G-TYQKTJRCEN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
  if(!userAuth) return;

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


  if(additionalData){
    sleep(1000);
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); 

  if(!snapShot.exists){
    
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set(Object.assign(
        {
          displayName,
          email,
          createdAt,
        },
        ...additionalData
      ));

      
    }catch(error){
      console.log('error creating user', error.message);
    }
  }else{
    console.log(`Welcome Back ${await (await userRef.get()).data().displayName}`)
  }

  

  return userRef;
}




const arrayToObject = (array) => {
 return array.reduce( (obj,item) => {
    obj[item.title] = item;
    return obj;
  }, {} )
}

export const convertCollectionSnapshotToMap = (collections) => {
 
  const collectionsMapArray = collections.docs.map(doc => {
    const {routeName,title,items} = doc.data();
    return ({
      id: doc.id,
      routeName,
      title,
      items
    });
  } )

  return arrayToObject(collectionsMapArray);

}






export default firebase;


