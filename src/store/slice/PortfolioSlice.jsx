

/*--=====================================
=PortfolioSlice=
======================================--*/

import { createSlice } from '@reduxjs/toolkit';

export const PortfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        loading: true
    },
    reducers: {

        loading: (state, { payload }) => {

            state.loading = payload;

        },

    }

});

export const { loading } = PortfolioSlice.actions;