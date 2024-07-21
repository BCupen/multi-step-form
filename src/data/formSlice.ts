import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RadioCardType } from "./types/RadioCardType";
import { CheckboxCardType } from "./types/CheckboxCardType";

export interface FormState {
  activeStep: number;
  name: string;
  email: string;
  phoneNumber: string;
  plan: RadioCardType | undefined;
  billingPeriod: "mo" | "yr";
  addOns: CheckboxCardType[];
  hasCompleted: boolean;
}

const initialState: FormState = {
  activeStep: 1,
  name: "",
  email: "",
  phoneNumber: "",
  plan: undefined,
  billingPeriod: "mo",
  addOns: [],
  hasCompleted: false,
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
    setPlan: (state, action: PayloadAction<RadioCardType | undefined>) => {
      state.plan = action.payload;
    },
    setBillingPeriod: (state, action: PayloadAction<"mo" | "yr">) => {
      state.billingPeriod = action.payload;
      console.log(state.billingPeriod);
    },
    addAddOn: (state, action: PayloadAction<CheckboxCardType>) => {
      state.addOns = [action.payload, ...state.addOns];
    },
    setAddOns: (state, action: PayloadAction<CheckboxCardType[]>) => {
      state.addOns = action.payload;
    },
    setHasCompleted: (state, action: PayloadAction<boolean>) => {
      state.hasCompleted = action.payload;
    },
  },
});

export const {
  setActiveStep,
  setName,
  setEmail,
  setPhoneNumber,
  setPlan,
  setBillingPeriod,
  setAddOns,
  setHasCompleted,
} = formSlice.actions;
export default formSlice.reducer;
