import { Clipboard, Circle, CheckCircle, Trash, } from 'phosphor-react';
// importação de svg

import { useState } from 'react';
import styles from './IndividualTask.module.css';

interface Props {
    content?: string;
    marked?: boolean;
    none?: boolean;
    onDeleteTask?: (comment: string) => void;
    onChangeStateTask?: (comment: string, state: boolean) => void;

}

export function IndividualTask({ content, marked, none, onDeleteTask, onChangeStateTask}: Props) {

    function handleDeleteTask(){
        onDeleteTask?.(content!);
    }

    function handleMarkedTask() {
        console.log('teste')
        onChangeStateTask?.(content!, marked!)
    }
    

    return (
        <div className={styles.all}>

            {none ?

                <article className={styles.noTask}>
                    <Clipboard size={70} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </article>
                :

                <article className={styles.task}>
                    <div className={styles.divMarked}>
                        <button className={styles.marked} onClick={handleMarkedTask}>
                            {marked ? <CheckCircle size={25} /> : <Circle size={25} />}
                        </button>
                    </div>

                        {marked ? <s>{content}</s> : <p>{content}</p>}

                    <div className={styles.divTrash}>
                        <button onClick={handleDeleteTask} className={styles.trash}>
                            <Trash size={25} />
                        </button> 
                    </div>    
                </article>
                
            }

        </div>
    )
}