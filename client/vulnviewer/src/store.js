import { configureStore } from '@reduxjs/toolkit';

import vulnerabilityReducer from './redux/vulnerability';

export default configureStore({
  reducer: {
    vulnerability: vulnerabilityReducer,
  },
})
