import { useState } from "react";
import { Arcade, Advanced, Pro } from "../components/Icons";
import { RadioCardGroup } from "../components/RadioCards";
import { RadioCardType } from "../data/types/RadioCardType";
import { ToggleBilling } from "../components/ToggleBilling";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { setBillingPeriod, setPlan } from "../data/formSlice";

const planItems = [
  {
    icon: <Arcade />,
    title: "Arcade",
    cost: {
      mo: 9,
      yr: 90
    }
  },
  {
    icon: <Advanced />,
    title: "Advanced",
    cost: {
      mo: 12,
      yr: 120
    }
  },
  {
    icon: <Pro />,
    title: "Pro",
    cost: {
      mo: 15,
      yr: 150
    }
  },
];

export const SelectPlan = () => {
  const dispatch = useAppDispatch();
  const { plan, billingPeriod } = useAppSelector(state => state.form);
  const [selectedPlan, setSelectedPlan] = useState<RadioCardType | undefined>(
    plan
  );
  const [billing, setBilling] = useState(billingPeriod);

  const handlePlanSelect = (plan: RadioCardType) => {
    if (selectedPlan?.title === plan.title) {
      setSelectedPlan(undefined);
      dispatch(setPlan(undefined))
    } else {
      setSelectedPlan(plan);
      dispatch(setPlan(plan));
    }
  };

  const handleBillingChange = (value: "mo" | "yr") => {
    setBilling(value);
    dispatch(setBillingPeriod(value));
  }

  return (
    <div className="w-full flex flex-col gap-10 rounded-lg bg-white p-8 -mt-24 lg:mt-0">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-marine text-3xl font-bold tracking-wide">
          Select your plan
        </h1>
        <p className="text-base text-neutrals-coolGray">
          You have the option of monthl or yearly billing.
        </p>
      </div>
      <form className="flex flex-col gap-12">
        <RadioCardGroup
          items={planItems}
          billingPeriod={billing}
          selectedItem={selectedPlan}
          onSelect={handlePlanSelect}
        />
        <div className="w-full flex justify-center gap-4 bg-neutrals-magnolia rounded-lg p-4">
          <h2
            className={`${
              billingPeriod === "mo"
                ? "text-primary-marine"
                : "text-neutrals-coolGray"
            } font-bold`}
          >
            Monthly
          </h2>
          <ToggleBilling handleClick={handleBillingChange} />
          <h2
            className={`${
              billingPeriod === "yr"
                ? "text-primary-marine"
                : "text-neutrals-coolGray"
            } font-bold`}
          >
            Yearly
          </h2>
        </div>
      </form>
    </div>
  );
};
