import {configureStore, combineReducers,getDefaultMiddleware} from "redux-starter-kit";
import userReducer from "./users/reducer"
import cartReducer from "./cart/reducer"

const rootReducer = combineReducers({
    user:userReducer.reducer,
    hotels:cartReducer.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
})

export default store;
