//aqui especificamos como o estado vai mudar baseado nas actions

//import actions
import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR,
} from '../actions'

//especificando o formato da store, state inicial do calendário
const initialCalendarState = {
    sunday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    monday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    tuesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    wednesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    thursday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    friday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    saturday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
  }

  
  //função reducer
  function calendar(state = initialCalendarState, action){
      //pegando propriedades na action
      const { day, recipe, meal} = action

      //especificando como o estado vai mudar baseado nas actions acima
      //o estado que retornar desta função será o novo estado da nossa store
      switch(action.type){
          case ADD_RECIPE:
            return {
                ...state,
                [day]:{
                    ...state[day],
                    [meal]: recipe.label,
                }
            }
          case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null,
                }
            }
          default:
            return state
      }
  }

  export default calendar;

  
