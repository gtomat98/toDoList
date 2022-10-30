import { PlusCircle, TShirt } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './NewTask.module.css';

interface getContent {
    onGetContent: (array: {content: string, completed: boolean}[]) => void;
    onDeleteContent?: string;
    onStateToChange?: {content: string, completed: boolean};
}

interface arrayContent {
    CommentType: [{content: string, completed: boolean}]
}

export function NewTask({ onGetContent, onDeleteContent, onStateToChange}: getContent) {

    const [comments, setComments] = useState<{content: string, completed: boolean}[]>([]);

    const [comment, setComment] = useState('');

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setComment(event.target.value);
    }

    function handleNewTask(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, {content: comment, completed: false}]);
        setComment('');
        console.log(comments)
    }

    useEffect(() => {
        const tasksWithoutDeletedOne = comments.filter(comment => {
            return comment.content != onDeleteContent
        })
        setComments(tasksWithoutDeletedOne);

    }, [onDeleteContent])

    useEffect(() => {
        const tasksWithChangedState = comments.filter(comment => {
            if(comment.content == onStateToChange?.content){
                if(comment.completed == true){
                    comment.completed = false;
                    return comment
                }
                else if(comment.completed == false){
                    comment.completed = true;
                    return comment
                }
            }
            else{
                return comment
            } 
        })

        setComments(tasksWithChangedState);

    }, [onStateToChange])

    useEffect(() => {
        onGetContent(comments);
    }, [comments])

    return (
        <div>
            <form onSubmit={handleNewTask} className={styles.form}>
                <input
                    value={comment}
                    type='text'
                    onChange={handleNewCommentChange}
                    placeholder="Adicione uma nova tarefa"
                    className={styles.input}
                    required
                />
                <button
                    type='submit'
                    className={styles.add}>
                    Criar
                    <PlusCircle size={23} />
                </button>
            </form>
        </div>
    )
}


