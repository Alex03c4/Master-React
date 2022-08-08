export const JuegosReducer = (state = [], action ) => {
    switch (action.type) {
        case "crear":
            return [...state, action.payload];

        case "borrar":
            return state.filter(juego => juego.id !== action.payload) 
    
        default:
            return state;
    }
}
