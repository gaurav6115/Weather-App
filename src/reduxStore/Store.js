import { createStore } from "redux";

import toogleTemp from "./Reducer";

const initialData = { C: 0, F: 0 };

const store = createStore(toogleTemp, initialData);

export default store;
