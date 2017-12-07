class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    console.log(this.cars.value + ": owner: " + this.owner.value);
  }

  render() {
    return (
      <div>
        <select ref={(c) => { this.cars = c; }}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input type="text" placeholder="type owner"
        ref={(c) => { this.owner = c; }} />
        <button onClick={this.getValue}>getValue</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Ref />,
  document.getElementById('root')
);
