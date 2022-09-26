import styles from './home.module.css'
import lessons from './datas'
import homeImg from '../../assets/home-img.svg'


const Home = () =>{
    return(
        <>
        <div className={styles.header}>
        <h1>My Lessons</h1>
        <img src={homeImg}/>
          <p>Below are my main lessons learned in the cycle.o.</p>
        </div>
       
        <div>
            {lessons.map(lesson => 
                <div>
                    <h1 key={lesson.id}>
                        {lesson.name}
                    </h1>
                    <p>
                        {lesson.description}
                    </p>
                    <div>
                    <img alt={lesson.name} src={lesson.poster}/>
                    </div>
                </div>
            )
            }
        </div>
        </>
        
    )
}


export default Home

