import { useAppSelector } from "../data/hooks";

interface NavStepProps {
  stepNo: number;
  stepTitle: string;
}

export const NavStep = ({ stepNo, stepTitle }: NavStepProps) => {
  const { activeStep } = useAppSelector((state) => state.form);
  const isActive = activeStep === stepNo;
  return (
    <li className="flex items-center gap-6">
      <span
        className={`w-12 h-12 rounded-full grid place-items-center font-bold border  ${isActive ? 'border-primary-blue text-primary-marine bg-primary-blue' : 'border-neutrals-magnolia bg-transparent text-neutrals-magnolia'}`}
      >
        {stepNo}
      </span>
      <div className="hidden lg:flex flex-col uppercase">
        <p className="text-neutrals-coolGray text-lg">Step {stepNo}</p>
        <h3 className="text-neutrals-alabaster text-xl font-bold tracking-wider">
          {stepTitle}
        </h3>
      </div>
    </li>
  );
};
