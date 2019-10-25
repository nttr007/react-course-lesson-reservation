import React ,{useState,useEffect} from "react"
import {api} from "./Utils"
import {sleep} from "./Utils"
import Hotel from "./Hotel"
import {useDispatch} from "react-redux"
import{additem} from "./cart/reducer"

const SearchResults = () => {
    const [results, setResults] = useState();
    const dispatch = useDispatch();

  
    const addItem = item => {
      dispatch(additem({name:item.name}))
    };

    useEffect(() => {
      const getResults = async () => {
        const response = await api.getResults();
        await sleep();
        setResults(response);
      };
  
      getResults();
    }, []);
  
    if (!results) {
      return 'loading...';
    }
  
    return results.map(item => (
      <Hotel key={`HOTEL|${item.id}`}>
        <h2>{item.name}</h2>
        <button onClick={() => addItem(item)}>Buy!</button>
      </Hotel>
    ));
  };

  export default SearchResults