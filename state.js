class Num extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Hello {this.state.count}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Num />,
  document.getElementById('root')
);
