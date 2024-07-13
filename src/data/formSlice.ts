import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RadioCardType } from "./types/RadioCardType";
import { CheckboxCardType } from "./types/CheckboxCardType";

export interface FormState {
  activeStep: number;
  name: string;
  email: string;
  phoneNumber: string;
  plan: RadioCardType;
  billingPeriod: "mo" | "yr";
  addOns: CheckboxCardType[];
}

const initialState: FormState = {
  activeStep: 1,
  name: "",
  email: "",
  phoneNumber: "",
  plan: {
    title: "",
    cost: 0,
  },
  billingPeriod: "mo",
  addOns: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPlan: (state, action: PayloadAction<RadioCardType>) => {
      state.plan = action.payload;
    },
    setBillingPeriod: (state, action: PayloadAction<"mo" | "yr">) => {
      state.billingPeriod = action.payload;
    },
    addAddOn: (state, action: PayloadAction<CheckboxCardType>) => {
      state.addOns = [action.payload, ...state.addOns];
    },
    setAddOns: (state, action: PayloadAction<CheckboxCardType[]>) => {
      state.addOns = action.payload;
    },
  },
});

export const { setActiveStep } = formSlice.actions;
export default formSlice.reducer;
