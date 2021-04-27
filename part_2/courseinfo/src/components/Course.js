import Reat from 'react';


const Header = props => {
      <h2>{props.course}</h2>
     
}

const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)
    return(
        <p>there are in total {parts.reducer((s, p) => s + p)}</p>
    )
}

const Content = () => {

}

const Part = () => {

}


const Course = () =>{
    return(
        <div>
            <Header course={props.course} />
        </div>
    )

}

export default Course;