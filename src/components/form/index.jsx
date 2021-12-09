
export default function Form(props) {
  return(
    <div>
      <input type="text" name="city" placeholder="ГОРОД" onChange={props.onCityChange} />
      <button onClick= {props.weatherButton}>Узнать погоду</button>
    </div>
  );
}