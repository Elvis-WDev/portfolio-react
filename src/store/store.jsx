import { configureStore } from '@reduxjs/toolkit'
import { PortfolioSlice } from './slice/PortfolioSlice'

export const store = configureStore({

    reducer: {
        portfolio: PortfolioSlice.reducer,
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware({

        serializableCheck: false

    })
})