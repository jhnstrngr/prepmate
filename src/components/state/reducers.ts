import { IItemState, IItemAction } from "../common/types";

export const defaultState: IItemState = { items: [] };

//export const initialState = { time: 0 };

export const timerReducer = (
  state: IItemState,
  action: IItemAction
): IItemState => {
  switch (action.type) {
    case "RESET":
      return defaultState;
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id) };
    default:
      throw new Error();
  }
};

export const guideReducer = (state: any, action: { type: any }) => {
  switch (action.type) {
    case "RESET_GUIDE":
      return { guide: true };
    case "COMPLETED_GUIDE":
      return { guide: false };
    default:
      throw new Error();
  }
};
