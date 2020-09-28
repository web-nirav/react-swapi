import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import planetReducer from "./planet/planet.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["planets"],
};

const rootReducer = combineReducers({
  planets: planetReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
