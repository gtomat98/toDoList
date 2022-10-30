import './global.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import { useState } from 'react';


export function App() {

  const [arrayContentToPass, setArrayContentToPass] = useState<{content: string, completed: boolean}[]>([])

  function getContent(array: {content: string, completed: boolean}[]) {
    setArrayContentToPass(array);
  }

  const [commentToDelete, setCommentToDelete] = useState<string>();

  function deleteTask(commentToDelete: string) {
    setCommentToDelete(commentToDelete)
  }

  const [stateToChange, setStateToChange] = useState<{content: string, completed: boolean}>();

  function changeStateTask(comment: string, state: boolean){
    setStateToChange({content: comment, completed: state})
  }

  return (
    <div>
      <Header />
      <NewTask onGetContent={getContent} onDeleteContent={commentToDelete} onStateToChange={stateToChange}/>
      <Tasks allComments={arrayContentToPass} onDeleteTask={deleteTask} onChangeStateTask={changeStateTask}/>
    </div>
  )
}
