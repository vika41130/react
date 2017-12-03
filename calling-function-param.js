class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getName(name){
    alert(name);
  }

  render() {
    return(
      <div>
        <h1>Hello, {this.props.name}</h1>
        <button onClick={()=>{this.getName(this.props.name)}}>getName</button>
        // arrow function
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome name="Linda" />,
  document.getElementById('root')
);
