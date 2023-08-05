import { ref, onValue } from "firebase/database"
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
    const financialNew = {
      id: key,
      title: object[key].title,
      body: object[key].body,
      urlImg: object[key].urlImg,
      urlNew: object[key].urlNew,
    }
    data.push(financialNew)
  }
  return data;
})

//слушатель новости по id
export const listenerNewID = (idNew, func) => {
  const dbRef = ref(db, `news/${idNew}`);
  onValue(dbRef, data => {
    const rez = data.val();
    rez.id = idNew;
    func(rez);
  }
  );
}


