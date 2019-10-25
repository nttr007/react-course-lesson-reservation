import {createSlice} from "redux-starter-kit";

const cart = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        additem:(state,action)=>{ 
            const {name} = action.payload 
            state.push(name)


        }
    }
})

export const {additem} = cart.actions;
export default cart;