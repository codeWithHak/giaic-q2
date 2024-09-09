function Header(props) {
    const headerStyle = {
      backgroundColor: " #f0c987",
      margin: "1rem",
      padding: " 1rem",
      width: "100%",
      textAlign: "center",
      fontWeight: "bold",
    };
    return (
      <h1 style={headerStyle} className="header">
        {props.title}
      </h1>
    );
  }
  
  export default Header;
  