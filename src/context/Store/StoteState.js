
import {useReducer} from 'react'
import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const StoreState = (props) => {
    //initial state
    const initialState = {
        stores: [],
        hola: "hola"
    }
    //2config
    //reducers
    const[globalState, dispatch] = useReducer(StoreReducer, initialState)

    //3funciones
    const changeText = () => {

        dispatch({
            type:"CHANGE_TEXT",
            payload: "muerto"
        })
    }
    //return
    return (
        <StoreContext.Provider
        value={{
            stores: globalState.stores,
            hola: globalState.hola,
            changeText
        }}
        >
            {props.children}


        </StoreContext.Provider>
    )
}

export default StoreState