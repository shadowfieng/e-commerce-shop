import React from "react";

type Props<T> = {
  options: T[];
  onChangeOption: (value: string) => void;
};

const Select = <T extends string | number>({
  options,
  onChangeOption,
}: Props<T>) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeOption(e.target.value);
  };

  return (
    <div className="w-15">
      <select
        className="w-full rounded-md text-black p-1"
        onChange={onChangeHandler}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
