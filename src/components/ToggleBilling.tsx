import { useEffect, useState } from "react";
import { useAppSelector } from "../data/hooks";

interface ToggleBillingProps {
    handleClick: (value: "mo" | "yr") => void;
}

export const ToggleBilling = ({handleClick}: ToggleBillingProps) => {
  const { billingPeriod } = useAppSelector(state => state.form);
  const [toggle, setToggle] = useState(!(billingPeriod === "mo"));

    useEffect(() => {
        if(toggle)
            handleClick('yr')
        else handleClick('mo')
    }, [toggle])

  return (
    <div
      className={`relative cursor-pointer w-12 h-6 bg-primary-marine rounded-full px-1`}
      role="button"
      onClick={() => setToggle(!toggle)}
    >
      <div className={`absolute top-1 ${toggle ? 'right-1' : 'left-1'} bg-white w-4 h-4 rounded-full transition-all duration-700`}></div>
    </div>
  );
};
