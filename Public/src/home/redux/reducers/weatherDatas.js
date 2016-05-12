import { GET_WEATHER_DATA } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return (() => {
        let newState = JSON.parse(JSON.stringify(state));

        let responseData = action.payload.data;

        newState.push(responseData);

        return newState;
      })();
    default:
      return state;
  }
};
