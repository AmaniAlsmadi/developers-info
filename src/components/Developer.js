import { v4 as uuidv4 } from 'uuid';

export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER',
}


export const DeveloperReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_DEVELOPER:
      return [...state,
        {
        developer: action.payload.developer,
        programmingLanguage: action.payload.programmingLanguage,
        technologies: action.payload.technologies,
        favFood: action.payload.favFood,
        favDrink: action.payload.favDrink,
        id: uuidv4(),
        }];
        case actionType.REMOVE_DEVELOPER:
            return state.filter((developer) => developer.id !== action.payload.id);
    default:
        return state;
    }
}