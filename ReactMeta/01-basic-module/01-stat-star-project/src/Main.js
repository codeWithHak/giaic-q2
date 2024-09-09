export default function Main(props) {
    return (
      <div className="main">
        <h1>
          {props.title}
          <br />
        </h1>
        <h2>
          <ol style={{paddingLeft:"30px"}}>
            {props.names.map((name, index) => (
              <li key={index}>{name} </li>
            ))}
          </ol>
        </h2>
      </div>
    );
  }
  