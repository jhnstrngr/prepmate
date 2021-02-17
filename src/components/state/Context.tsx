import { createContext, useReducer } from "react";
import { timerReducer, defaultState } from "../state/reducers";
import { IContextModel } from "../common/types";

export const MyContext = createContext({} as IContextModel);

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(timerReducer, defaultState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
