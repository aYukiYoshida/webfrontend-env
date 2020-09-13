interface Props {
  name: string;
}

const Elm: React.FC<Props> = props => <h1>Hello, {props.name}</h1>;

ReactDOM.render(
  <Elm name="yuki"></Elm>,
  document.getElementById("root")
)