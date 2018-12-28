import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  doThing = () =>{
    this.props.selectRecipe({})
  }

  render() {
    console.log("props", this.props)
    return (
      <div>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = (calendar) => {
  
  const dayOrder = 
  [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null
        return meals
      }, {})
    }))
  }
}

//aqui envia as actions
const mapDispatchToProps = (dispatch) => {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
