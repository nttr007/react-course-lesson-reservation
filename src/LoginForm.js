import React, {useState} from 'react';
import {api} from "./Utils"
import {sleep} from "./Utils"
import {useDispatch} from "react-redux"
import {login} from "./users/reducer"


const LoginForm = ({setUser}) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

  
    const submit = async event => {
      event.preventDefault();
      setLoading(true);
      const userData = await api.getUser(value);
      await sleep();
      if (userData) {
        setUser(userData);
      }
      setLoading(false);
      if (userData){
          dispatch(login({
              id: userData.id,
              name: userData.name,
              language: userData.language,

          }))
      }
    };
  
    if (loading) {
      return 'loading...';
    }
  
    return (
      <form onSubmit={submit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">LogIn</button>
      </form>
    );
  };

  export default LoginForm;
