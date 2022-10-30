import styles from './Tasks.module.css';
import { IndividualTask } from './IndividualTask';
import { useState } from 'react';

interface Comments {
    allComments: { content: string, completed: boolean }[];
    onDeleteTask: (commentToDelete: string) => void;
    onChangeStateTask: (comment: string, state: boolean) => void;
}

export function Tasks({ allComments, onDeleteTask, onChangeStateTask }: Comments) {



    var counter = allComments.filter(comment => {
        return comment.completed == true;
    })

    function deleteTask(commentToDelete: string) {
        onDeleteTask(commentToDelete);
    }

    function changeStateTask(comment: string, state: boolean) {
        onChangeStateTask(comment, state);
    }

    return (
        <main className={styles.main}>
            <header>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <p>{allComments.length}</p>
                </div>
                <div className={styles.completed}>
                    <strong>Concluídas</strong>
                    <p>{counter.length == 0 ? 0 : counter.length + " de " + allComments.length}</p>
                </div>
            </header>
            {allComments.length == 0 ? <IndividualTask none /> : allComments.map(comment => {

                return (<IndividualTask content={comment.content} key={comment.content} onDeleteTask={deleteTask} onChangeStateTask={changeStateTask} marked={comment.completed} />)
            })}
        </main>
    )
}