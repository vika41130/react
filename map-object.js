class Img extends React.Component {
  constructor(props) {
    super(props);
    this.addImg = this.addImg.bind(this);
    this.state = {
      imgArray: [
        {src: "img/img1.jpg", description: "img1"}, {src: "img/img2.jpg", description: "img2"},
        {src: "img/img3.jpg", description: "img3"}, {src: "img/img4.jpg", description: "img4"}
      ],
      currentId: 0
    };
  }

  addImg = () => {
    this.state.imgArray.unshift({src: "img/img5.png", description: "img5"});
    this.setState({});
  }

  render() {
    return (
      <div>
        <button onClick={this.addImg}>Add New Img</button>
        {
          this.state.imgArray.map((img, index)=>{
            return(
              <div>
                <img src={img.src} key={index} />
                <p key={index}>{img.description}</p>
              </div>
            );
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
