import { useState } from "react";
import { Arcade, Advanced, Pro } from "../components/Icons";
import { RadioCardGroup } from "../components/RadioCards";
import { RadioCardType } from "../data/types/RadioCardType";
import { ToggleBilling } from "../components/ToggleBilling";

const planItems = [
  {
    icon: <Arcade />,
    title: "Arcade",
    cost: 9,
  },
  {
    icon: <Advanced />,
    title: "Advanced",
    cost: 12,
  },
  {
    icon: <Pro />,
    title: "Pro",
    cost: 15,
  },
];

export const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<RadioCardType | undefined>(
    undefined
  );
  const [billing, setBilling] = useState("mo");

  const handlePlanSelect = (plan: RadioCardType) => {
    if (selectedPlan?.title === plan.title) {
      setSelectedPlan(undefined);
    } else {
      setSelectedPlan(plan);
    }
  };

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
          <h2 className={`${billing === 'mo' ? 'text-primary-marine' : 'text-neutrals-coolGray'} font-bold`}>Monthly</h2>
          <ToggleBilling handleClick={setBilling} />
          <h2 className={`${billing === 'yr' ? 'text-primary-marine' : 'text-neutrals-coolGray'} font-bold`}>Yearly</h2>
        </div>
      </form>
    </div>
  );
};
