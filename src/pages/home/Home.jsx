import lessons from './datas'
import Title from '../../components/title/Title'


const Home = () =>{
    return(
        <>
        <h1>My Lessons</h1>
        <div>
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
/*
<>
<text>As lições mais desafiadoras até agora foram:</text>
<Title text = {"Props e Children"}/>
<Title text = {"Hooks: useState e useEffect"}/>
<Title text = {"Consumo de API"}/>
<Text>Listas e Keys</Text>
</>*/

export default Home

