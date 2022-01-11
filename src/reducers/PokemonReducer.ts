import { PokemonType, POKEMON_FAIL, POKEMON_SUCCESS, PokemonDispatchType } from "../actions/PokemonActionTypes";

interface InitialState {
    success :boolean
    pokemon? :PokemonType
}

const initialState :InitialState = {
    success:false
}

const PokemonReducer = ( state= initialState, action:PokemonDispatchType ) :InitialState => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                ...state,
                success: false
            }
        case POKEMON_SUCCESS:
            const {abilities, sprites} = action.payload
            return {
                    ...state,
                    success: true,
                    pokemon: {
                        abilities,
                        sprites
                    }
                }

        default:
            return state;
    }
}

export default PokemonReducer