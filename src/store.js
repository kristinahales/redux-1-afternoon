import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRSTNAME = 'UPDATE_AUTHOR_FIRSTNAME';
export const UPDATE_AUTHOR_LASTNAME = 'UPDATE_AUTHOR_LASTNAME';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const ADD_RECIPE = 'ADD_RECIPE';


function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            };
        case UPDATE_CATEGORY:
                return {
                    ...state,
                    category: payload
                };
        case UPDATE_AUTHOR_FIRSTNAME:
                return {
                    ...state,
                    authorFirstName: payload
                };
        case UPDATE_AUTHOR_LASTNAME: 
                return {
                    ...state,
                    authorLastName: payload
                };
        case ADD_INGREDIENT:
                const newIngredients = [...state.ingredients, payload];
                return {
                    ...state,
                    ingredients: newIngredients
                };
        case ADD_INSTRUCTION:
                const newInstruction = [...state.instructions, payload];
                return {
                    ...state,
                    instructions: newInstruction
                };
        case ADD_RECIPE:
        const {
            name,
            category,
            authorFirstName,
            authorLastName,
            ingredients,
            instructions
        } = state;
        const recipe = {
            name,
            category,
            authorFirstName,
            authorLastName,
            ingredients,
            instructions
        };
        const newRecipes = [...state.recipes, recipe];
            return {
                ...state, recipes: newRecipes 
        };
        default:
            return state;
    }
}

export default createStore(reducer);