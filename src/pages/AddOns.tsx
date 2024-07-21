import { useState } from "react";
import { CheckboxCardGroup } from "../components/CheckboxCards";
import { CheckboxCardType } from "../data/types/CheckboxCardType";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { setAddOns } from "../data/formSlice";

const addons: CheckboxCardType[] = [
  {
    title: "Onlne Service",
    description: "Access to multiplayer games",
    cost: {
      mo: 1,
      yr: 10,
    },
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    cost: {
      mo: 2,
      yr: 20,
    },
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    cost: {
      mo: 2,
      yr: 20,
    },
  },
];

export const AddOns = () => {
    const dispatch = useAppDispatch();
    const {  addOns } = useAppSelector(state => state.form);
    const [selectedAddOns, setSelectedAddOns] = useState<CheckboxCardType[]>(addOns);

    const handleSelection = (item: CheckboxCardType) => {
        if(selectedAddOns.some(addOn => addOn.title === item.title)){
            setSelectedAddOns(selectedAddOns.filter(addOn => addOn.title !== item.title))
            dispatch(setAddOns(selectedAddOns.filter(addOn => addOn.title !== item.title)));
            return;
        }
        setSelectedAddOns([item, ...selectedAddOns]);
        dispatch(setAddOns([item, ...selectedAddOns]));
    }
  return (
    <div className="w-full flex flex-col gap-10 rounded-lg bg-white p-8 -mt-24 lg:mt-0">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-marine text-3xl font-bold tracking-wide">
          Pick add-ons
        </h1>
        <p className="text-base text-neutrals-coolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <form className="flex flex-col gap-12">
        <CheckboxCardGroup
            items={addons}
            billingPeriod="mo"
            selectedItems={selectedAddOns}
            onItemSelect={handleSelection}
        />
      </form>
    </div>
  );
};
