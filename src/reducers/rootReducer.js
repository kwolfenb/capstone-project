export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_CLICK':
      const { boxId, filled, letter, value } = action;
      let newState = Object.assign({}, state, {
        value: value,
        [boxId]: {
          filled: filled,
          letter: letter,
        }
      });
      return newState;

    default:
      return state;
  }
};

let initialState = {
  prop: 'test'
}