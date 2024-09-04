export default function Sidebar(props) {

    return (
      <div className="sidebar">
       <h1> 
        {props.title}
        </h1>
         <h3>
           Name: {props.name} <br/>
           Photo: {props.image}<br/>
           Matches: {props.matches}<br/>
           Average:{props.average}<br/>
           Runs: {props.runs} <br/>
           Age: {props.age}</h3>
      </div>
    );
  }
  