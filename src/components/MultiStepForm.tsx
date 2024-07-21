import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { setActiveStep, setHasCompleted } from "../data/formSlice";
import { useEffect } from "react";

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { activeStep, hasCompleted } = useAppSelector((state) => state.form);

  const showBackButton = activeStep > 1;
  const isLastStep = activeStep === 4;

  const handleNavigate = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        navigate("/multi-step-form/personal-info");
        break;
      case 2:
        navigate("/multi-step-form/select-plan");
        break;
      case 3:
        navigate("/multi-step-form/add-ons");
        break;
      case 4:
        navigate("/multi-step-form/summary");
        break;
      default:
        navigate("/multi-step-form/personal-info");
    }
  };

  const nextStep = () => {
    if (!isLastStep) dispatch(setActiveStep(activeStep + 1));
    else dispatch(setHasCompleted(true));
  };

  const prevStep = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  useEffect(() => {
    handleNavigate(activeStep);
  }, [activeStep]);

  return (
    <div className="max-w-[1024px] w-full lg:h-[60%] flex flex-col lg:flex-row bg-white rounded-xl lg:p-4">
      <Navigation />
      <div className="relative w-full lg:w-2/3 h-full bg-neutrals-magnolia lg:bg-white px-4 lg:px-16">
        <Outlet />
        {!hasCompleted && (
          <div
            className={`absolute w-full bg-white bottom-0 left-0 p-4 lg:px-24 flex ${
              showBackButton ? "justify-between" : "justify-end"
            }`}
          >
            {showBackButton && (
              <button
                className="text-neutrals-coolGray hover:text-primary-marine font-medium cursor-pointer"
                onClick={() => prevStep()}
              >
                Go Back
              </button>
            )}
            <button
              className={`${
                isLastStep
                  ? "bg-primary-purpleBlue py-2 px-5"
                  : "bg-primary-marine p-3"
              } text-neutrals-magnolia rounded-md`}
              onClick={() => nextStep()}
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
