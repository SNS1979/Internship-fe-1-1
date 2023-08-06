import { ref, onValue, set } from "firebase/database"
import { db } from "./initFirebase";

 
//Слушатель для новостей
export const listenerNews = (func) => {
  const dbRef = ref(db, `news`);
  onValue(dbRef, data => {
    func(data.val());
  }
  );
}

//
export const toMass = (object => {
 
  const data = [];
  for (const key in object) {
    const financialNew = {...object[key]};
    financialNew.id = key;
    data.push(financialNew)
  }
  return data;
})



//слушатель новости по id
export const listenerNewID = (idNew, func) => {
  if (idNew) {
    const dbRef = ref(db, `news/${idNew}`);
    onValue(dbRef, data => {
    const rez = data.val();
    rez.id = idNew;
    func(rez);
  }
  );
  }
}

export const writeExpertComment = (idNew, idComment, comment) => {
    set (ref (db , 'news/' + idNew + '/analysis/' + idComment), {
      body:comment,
    });
}


