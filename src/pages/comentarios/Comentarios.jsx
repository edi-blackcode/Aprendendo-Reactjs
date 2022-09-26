import { useState } from 'react'
import styles from './comentarios.module.css'
import relaxImg from '../../assets/comentario-img.svg'
import { nanoid } from 'nanoid'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

function Comentarios() {
    const [list, setList] = useState([])
    const [task, setTask] = useState('')

    function handleInput(event){
        setTask(event.target.value)
    }

    function handleCreateTask() {
        const newTask = {
            id: nanoid(),
            title: task
        }

        if(task.title === '') {
            return
        }

        setList([...list, newTask])

        setTask('')

        function handleRemoveTask(id) {
            const tasksFiltered = list.filter(item => task.id !== id)
            setList(tasksFiltered)
        }

    }
    return(
        <>
        <div className={styles.header}>
            <h1>
            Deixe um comentário
            </h1>
            <img src={relaxImg} />
        </div>
        <div className={styles.inputContainer}>
            <input
            className={styles.input}
            type="text"
            placeholder="Digite sua mensagem aqui"  
            onChange={handleInput}    
            value={task}    
            />
            <div className={styles.addContainer}>
                <button className={styles.addTask} onClick={handleCreateTask} >
                <FiPlus size={16} color="orange" />
                </button>
            </div> 
            </div> 

            <main>
                <ul className={styles.listItems}>
                    {list.map(item => {
                        return (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <button className={styles.removeTask} onclick={() => handleRemoveTask(item.id)}>
                        <FiTrash2 size={16} />
                        </button>
                    </li>
                        )
                    })}
                  </ul>
            </main>  
        </>
    )
}

export default Comentarios