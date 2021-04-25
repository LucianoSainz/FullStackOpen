import Reat from 'react';


const Header = props => {
      <h2>{props.course}</h2>
     
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