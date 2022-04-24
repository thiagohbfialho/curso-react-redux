import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log("Reducers de numeros")
        console.log(state, '',action)
        return{
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action){
        console.log("Reducers de nomes")
        console.log(state, '',action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig