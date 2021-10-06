import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FromWithCustomHook';
// import { MultipleCustomHooks } from './components/03-ejemplos/MultipleCustomHooks';----------------------------
// import { FocusScreen } from './components/04-useRef/FocusScreen'; ---------------------------------------------
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';----------------------------------------
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { ToDoApp } from './components/08-useReducer/ToDoApp';--------------------------------------------------
import { MainApp } from './components/09-useContext/MainApp';
import './components/02-useEffect/effects.css';

ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);
