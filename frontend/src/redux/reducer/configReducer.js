import { CHANGE_MODE } from "../action/configAction";

const INITIAL_STATE = {
  mode: "light",
};
const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export default configReducer;
