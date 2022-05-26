import React from "react";

export const IncompleteTodos = (props) => {
  const { Todos, ClickComplete, ClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* map関数でループを回す 、引数にはincompleteTodes（usestate）の配列が来る.*/}
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => ClickComplete(index)}>完了</button>
              <button onClick={() => ClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
