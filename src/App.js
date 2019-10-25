import React, {useState, useEffect} from 'react';
import  ReservationHeader from "./ReservationHeader";
import ShoppingCart from "./ShoppingCart";
import SearchResults from "./SearchResults";
import store from "./store"
import {Provider } from "react-redux"



const App = () => {
  const [user, setUser] = useState();
  const [lang, setLang] = useState('es');
  
  

  useEffect(() => {
    setLang((user && user.language) || 'es');
  }, [user, setLang]);

 

  return (
    <main>
      <Provider store={store}>
      <ReservationHeader user={user} language={lang} setUser={setUser} />
      <ShoppingCart  />
      <SearchResults  />
      </Provider>
    </main>
  );
};

export default App;
