import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  devTools: Boolean(process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS),
});

if (Boolean(process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS) && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
