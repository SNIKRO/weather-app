export default function Weather(props) {

  return(
    <div>
      <h1>Город: {props.city}</h1>
      <h2>Температура: {props.temp}</h2>
    </div>
  );
}