import { ThankYou } from "../components/Icons";
import { useAppSelector } from "../data/hooks";

export const Summary = () => {
  const { plan, billingPeriod, addOns, hasCompleted } = useAppSelector(
    (state) => state.form
  );
  const total =
    (plan?.cost[billingPeriod] || 0) +
    addOns.reduce((sum, curr) => sum + curr.cost[billingPeriod], 0);
  return (
    <div className="w-full h-full flex flex-col gap-10 rounded-lg bg-white p-8 -mt-24 lg:mt-0">
      {hasCompleted ? (
        <CompletedScreen />
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="text-primary-marine text-3xl font-bold tracking-wide">
              Finishing up
            </h1>
            <p className="text-base text-neutrals-coolGray">
              Double-check everything looks OK beofer confirming.
            </p>
          </div>

          <div className="bg-neutrals-magnolia rounded-xl p-6">
            <div className="w-full flex items-center justify-between bg-transparent pb-5 border-b border-neutrals-lightGray">
              <span>
                <h2 className="text-primary-marine font-bold tracking-wide">
                  {plan?.title}{" "}
                  {billingPeriod === "mo" ? "(Monthly)" : "(Yearly)"}
                </h2>
                <button className="text-neutrals-coolGray underline decoration-2">
                  Change
                </button>
              </span>
              <p className="text-primary-marine font-bold">
                ${plan?.cost[billingPeriod]}/{billingPeriod}
              </p>
            </div>
            <ul>
              {addOns.map((addOn) => (
                <li className="w-full flex justify-between py-2">
                  <h3 className="text-neutrals-coolGray font-medium">
                    {addOn.title}
                  </h3>
                  <p className="text-primary-marine">
                    +${addOn.cost[billingPeriod]}/{billingPeriod}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between px-6">
            <h3 className="text-neutrals-coolGray">
              Total (per {billingPeriod === "mo" ? "month" : "year"})
            </h3>
            <p className="font-bold text-primary-purpleBlue text-lg">
              ${total}/{billingPeriod}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const CompletedScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <ThankYou />
      <h1 className="text-primary-marine font-bold text-3xl tracking-wide">Thank you!</h1>
    <p className="text-center text-neutrals-coolGray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  );
};
