import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth.reducer';
import novostiSlice from './reducer/novosti.reducer';

export const store = configureStore({
    reducer: {
        novostis: novostiSlice,
        auth: authSlice
    }
});