class Img extends React.Component {
  constructor(props) {
    super(props);
    this.addImg = this.addImg.bind(this);
    this.state = {
      imgArray: ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg",
    "img/img5.png", "img/img6.jpg"],
      currentId: 0
    };
  }

  addImg = () => {
    this.state.imgArray.unshift("new img");
    this.setState({});
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <button onClick={this.addImg}>Add New Img</button>
        {
          this.state.imgArray.map((img, index)=>{
            return <h1 key={index}>{img}</h1>
          })
        }
      </div>
    );
  }
}

ReactDOM.render(
  <Img />,
  document.getElementById('root')
);
