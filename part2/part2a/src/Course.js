

  const Course = (props) =>{
    const course = 
    {    
        id: 1,  
        name:'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
    }
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
  
    
        
    const Header = (props) => {
      
      return (
        <div>
          <h1>{props.courseName}</h1>
        </div>
      )
    }

    const Content = (props) => {

  
      return (
        <div>
          {props.courseParts}
        </div>
      )
    }


    const Total = (props) => {

      const exerciseArray = [];

      const reducer = (a, b) => {
        return (
          a + b
        )
      }

      for (let i = 0; i< course.parts.length; i++) {
        exerciseArray.push(course.parts[i].exercises)
      }

      return (
        <div>
          <h4>total of {exerciseArray.reduce(reducer)} exercises</h4>
          
        </div>
      )
    }

    return(
      <div>
        <Header courseName={props.course.name}/>
        <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
        <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
        <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
        <p>{props.course.parts[3].name} {props.course.parts[3].exercises}</p>
        <Total/>
        <p>{props.courses}</p>
        

      </div>
    )
  }

  export default Course