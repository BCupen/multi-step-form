import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormState {
    activeStep: number;
}

const initialState: FormState = {
    activeStep: 1,
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setActiveStep: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload
        }
    }
})

export const { setActiveStep } = formSlice.actions;
export default formSlice.reducer;