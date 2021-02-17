export type IItem = {
  id: string;
  name: string;
  time: number;
  complete: boolean;
};

export type IItemState = {
  items: IItem[];
};

export type IItemAction =
  | { type: "ADD_ITEM"; payload: IItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "RESET" };

export type IContextModel = {
  state: IItemState;
  dispatch: React.Dispatch<IItemAction>;
};
