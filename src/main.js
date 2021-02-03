import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}
// Food state change fxn
const blueFood = changeState("soil")(5);
// const greenFood = changeState("soil")(10);
// const yuckyFood = changeState("soil")(-5);
// // Water state change fxn
// const hydrate = changeState("water")(1);
// const superHydrate = changeState("water")(10);
// const dessert = changeState("water")(-5);
// // Light state change fxn
// const oregon = changeState("light")(1);
// const california = changeState("light")(10);
// const winterAlaska = changeState("light")(-5);


const storeState = (initalState) => {
  let currentState = initalState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

const stateControl = storeState({ "soil": 5, "water": 1, "light": 0 });

$(document).ready(function () {
  const initialState = stateControl();
  $('#soil-value').text(`Soil: ${initialState.soil}`);
  $('#feed').click(function () {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
});

