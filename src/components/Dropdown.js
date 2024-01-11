import React, { useState } from "react";

export default function Dropdown({ options, parentCallBack }) {
  let [selected, setSelected] = useState(() => {
    let temp = [];
    options.map((item) => {
      return (temp = [...temp, true]);
    });
    return temp;
  });

  const handleChange = (event) => {
    let temp = selected;
    temp[event.target.value - 1] = !temp[event.target.value - 1];
    setSelected(temp);
    parentCallBack(selected);
  };

  return (
    <div className="Dropdown">
      <form onChange={handleChange}>
        {options.map((option) => {
          return (
            <div key={option}>
              <input
                type="checkbox"
                defaultChecked={true}
                id={option}
                value={option}
              />
              <label>{"Gen " + option}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
}
