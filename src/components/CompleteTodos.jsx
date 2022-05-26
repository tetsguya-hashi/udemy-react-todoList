import React from "react";

export const CompleteTodos = (props) => {
  const { Todos, OnClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {Todos.map((todo, completeIndex) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => OnClick(completeIndex)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
