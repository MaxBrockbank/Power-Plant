/*
export const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

export const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
}

export const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  }
}
*/

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}
// Food state change fxn
export const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);
// Water state change fxn
const hydrate = changeState("water")(1);
const superHydrate = changeState("water")(10);
const dessert = hangeState("water")(-5);
// Light state change fxn
const oregon = changeState("light")(1);
const california = changeState("light")(10);
const winterAlaska = changeState("light")(-5);


const storeState = (initalState) => {
  let currentState = initalState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const stateControl = storeState({ "soil": 5, "water": 1, "light": 0 });

