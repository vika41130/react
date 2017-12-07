class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      imgArray: ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg",
    "img/img5.png", "img/img6.jpg"],
      currentId: 0
    };
  }

  next = () => {
    this.setState(() => ({
      currentId: this.state.currentId == this.state.imgArray.length - 1 ? 0 : this.state.currentId + 1
    }));
  }

  prev = () => {
    this.setState(() => ({
      currentId: this.state.currentId == 0 ? this.state.imgArray.length - 1 : this.state.currentId - 1
    }));
  }

  render() {
    return (
      <div>
        <img src={this.state.imgArray[this.state.currentId]} ref={(c) => { this.src = c; }} />
        <hr/>
        <button onClick={this.next}>Next</button>
        <button onClick={this.prev}>Prev</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Slider />,
  document.getElementById('root')
);
