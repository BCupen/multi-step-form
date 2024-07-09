import { CheckboxCardType } from "../data/types/CheckboxCardType";

export interface CheckboxCardGroupProps {
  items: CheckboxCardType[];
  selectedItems: CheckboxCardType[];
  billingPeriod: "mo" | "yr";
  onItemSelect: (item: CheckboxCardType) => void;
}

export interface CheckboxCardProps {
  item: CheckboxCardType;
  isSelected: boolean;
  onItemSelect: (item: CheckboxCardType) => void;
  billingPeriod: "mo" | "yr";
}

export const CheckboxCardGroup = ({
  items,
  billingPeriod,
  selectedItems,
  onItemSelect,
}: CheckboxCardGroupProps) => {
    const isSelected = (item: CheckboxCardType) => {
        return selectedItems.some(addOn => addOn.title === item.title)
    }
  return (
    <ul className="w-full flex flex-col gap-5">
      {items.map((item: CheckboxCardType) => (
        <CheckboxCard
          item={item}
          billingPeriod={billingPeriod}
          isSelected={isSelected(item)}
          onItemSelect={onItemSelect}
          key={item.title}
        />
      ))}
    </ul>
  );
};

export const CheckboxCard = ({
  item,
  isSelected,
  onItemSelect,
  billingPeriod,
}: CheckboxCardProps) => {
  const displayCost = `+$${item.cost[billingPeriod]}/${billingPeriod}`;
  return (
    <li
      className={`flex justify-between items-center cursor-pointer flex-1 border ${
        isSelected
          ? "bg-neutrals-alabaster border-primary-purpleBlue"
          : "bg-white border-neutrals-lightGray"
      } hover:border-primary-purpleBlue rounded-lg p-5`}
      role="button"
      onClick={() => onItemSelect(item)}
    >
      <span className="relative w-5 h-5">
        <input
          id={item.title}
          type="checkbox"
          className="relative appearance-none cursor-pointer peer w-5 h-5 rounded border border-neutrals-lightGray checked:bg-primary-purpleBlue"
          checked={isSelected}
          onChange={() => onItemSelect(item)}
        />
        <svg
          className="
      absolute 
      top-0
      w-5 h-5
      hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>

      <div className="basis-2/3">
        <h2 className="text-primary-marine font-bold">{item.title}</h2>
        <p className="text-neutrals-coolGray text-base">{item.description}</p>
      </div>
      <span>
        <p className="text-primary-purpleBlue text-base">{displayCost}</p>
      </span>
    </li>
  );
};
