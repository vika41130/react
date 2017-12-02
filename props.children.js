function Welcome(props) {
  return(
    <div>
      <h1>Hello, {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
}

ReactDOM.render(
  <Welcome name="Linda">
  <h1>123</h1>
  <h2>123</h2>
  </Welcome>,
  document.getElementById('root')
);
