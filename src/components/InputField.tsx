import { useState } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validationFn: (value: string) => boolean;
}

export const InputField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  validationFn,
}: InputFieldProps) => {
  const [hasError, setHasError] = useState(false);

  const handleValidation = (value: string) => {
    if (!validationFn(value)) {
      setHasError(true);
    } else {
      if (hasError) setHasError(false);
    }
  };
  return (
    <div>
      <span className="w-full flex items-center justify-between">
        <label htmlFor={id} className="text-primary-marine font-medium">
          {label}
        </label>
        <p
          className={`${
            hasError ? "inline-block" : "hidden"
          } text-primary-red text-sm font-bold`}
        >
          This field is required
        </p>
      </span>

      <input
        id={id}
        type="text"
        className={`w-full rounded-md p-3 lg:p-4 mt-2 outline-none border placeholder:text-neutrals-coolGray font-medium tracking-wider text-primary-marine focus:border-primary-purpleBlue ${
          hasError ? "border-primary-red" : "border-neutrals-lightGray"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => handleValidation(value)}
      />
    </div>
  );
};
