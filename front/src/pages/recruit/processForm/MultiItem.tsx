import React, { Fragment, useState } from 'react';

interface Props {
  item: string;
  toggle: boolean;
  onUpdate(multiItem: string): void;
}

const MultiItem = ({ item, toggle, onUpdate }: Props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleBlur = () => {
    onUpdate(input);
  };

  return (
    <Fragment>
      {toggle ? (
        <input
          type="text"
          value={item}
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
      ) : (
        <div>- {item}</div>
      )}
    </Fragment>
  );
};

export default MultiItem;
