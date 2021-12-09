
export default function Form(props) {
  return(
    <form>
      <input type="text" name="city" placeholder="ГОРОД" onChange={props.onCityChange} />
      <button onClick= {props.weatherButton}>Узнать погоду</button>
    </form>
  );
}