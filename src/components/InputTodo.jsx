import React from "react";
const style = {
  padding: "10px",
  marginBottom: "20px",
  width: "60%",
  borderRadius: "8px",
  marginTop: "20px",
  backgroundColor: "#c1ffff"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
