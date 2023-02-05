import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
import { persistedContactReducer } from '../redux/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: persistedContactReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
