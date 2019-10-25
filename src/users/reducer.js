import {createSlice} from "redux-starter-kit";

const user = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        login:(state,action)=>{ 
            return {name:action.payload.name,
                language: action.payload.language,
                id: action.payload.id
            }  
        }
    }
})

export const {login} = user.actions;
export default user;