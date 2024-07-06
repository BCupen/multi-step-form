import { RadioCardType } from "../data/types/RadioCardType";

export interface RadioCardGroupProps {
  items: RadioCardType[];
  billingPeriod: string;
  selectedItem: RadioCardType | undefined;
  onSelect: (item: RadioCardType) => void;
}

export interface RadioCardItemProps extends RadioCardType {
  billingPeriod: string;
  isSelected: boolean;
  onSelect: (item: RadioCardType) => void;
}

export const RadioCardGroup = ({
  items,
  billingPeriod,
  selectedItem,
  onSelect,
}: RadioCardGroupProps) => {
  return (
    <ul className="w-full flex flex-col lg:flex-row gap-3 lg:gap-5">
      {items.map((item: RadioCardType) => (
        <RadioCardItem
          icon={item.icon}
          title={item.title}
          cost={item.cost}
          billingPeriod={billingPeriod}
          isSelected={selectedItem?.title === item.title}
          onSelect={onSelect}
          key={item.title}
        />
      ))}
    </ul>
  );
};

export const RadioCardItem = ({
  icon,
  title,
  cost,
  billingPeriod,
  isSelected,
  onSelect,
}: RadioCardItemProps) => {
  const isYearly = billingPeriod === "yr";
  return (
    <li
      className={`cursor-pointer flex-1 border ${
        isSelected
          ? "bg-neutrals-alabaster border-primary-purpleBlue"
          : "bg-white border-neutrals-lightGray"
      } hover:border-primary-purpleBlue rounded-lg p-4`}
      role="button"
      onClick={() =>
        onSelect({
          icon,
          title,
          cost,
        })
      }
    >
      <input className="hidden" type="radio" name="radio" />
      <label className=" cursor-pointer w-full flex flex-row lg:flex-col items-start gap-4 lg:gap-12">
        <span>{icon}</span>
        <div>
          <h2 className="text-primary-marine font-bold">{title}</h2>
          <p className="text-neutrals-coolGray text-base">
            ${cost}/{billingPeriod}
          </p>
          {isYearly && (
            <p className="text-primary-marine text-base mt-1 tracking-wide font-medium">
              2 months free
            </p>
          )}
        </div>
      </label>
    </li>
  );
};
