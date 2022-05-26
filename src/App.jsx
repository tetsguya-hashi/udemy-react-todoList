import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  //input.valueの初期値を設定
  const [todoText, setTodoText] = useState("");
  //未完了のtodoリストをuseState初期化,todoへ一つずつ渡す準備
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //完了のtodoリストをuseStateで初期化
  const [completeTodos, setCompleteTodos] = useState([]);
  //inputの変更を検知し、アロー関数内で(event.target.value)で変更された内容をとってきて、
  //inputのvalueをsetTodoTextで書き換える
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン mapの第２引数ｄから何番目かのindexを取得する
  const onClickDelete = (index) => {
    //incompleteTodosの配列全てを取得
    const newTodos = [...incompleteTodos];
    //spliceで削除するindexと個数を指定
    newTodos.splice(index, 1);
    //newTodos(削除後のリスト)で更新する
    setIncompleteTodos(newTodos);
  };
  //完了ボタン
  const onClickComplete = (index) => {
    //未完了のリスト取得
    const newIncompleteTodos = [...incompleteTodos];
    //押された要素を削除
    newIncompleteTodos.splice(index, 1);
    //完了リスト取得後、未完了から削除したindexのモノを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    //以下更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (completeIndex) => {
    const returnCompleteTodos = [...completeTodos];
    returnCompleteTodos.splice(completeIndex, 1);
    const returnIncompleteTodos = [
      ...incompleteTodos,
      completeTodos[completeIndex]
    ];
    setIncompleteTodos(returnIncompleteTodos);
    setCompleteTodos(returnCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo５個までです。消化してください。
        </p>
      )}

      <IncompleteTodos
        Todos={incompleteTodos}
        ClickComplete={onClickComplete}
        ClickDelete={onClickDelete}
      />
      <CompleteTodos Todos={completeTodos} OnClick={onClickReturn} />
    </>
  );
};
