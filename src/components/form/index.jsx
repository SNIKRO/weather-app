
export default function Form(props) {
  return(
    <form  onSubmit = {props.weatherButton} >
      <input type="text" name="city" placeholder="ГОРОД" onChange={props.onCityChange} />
      <button>Узнать погоду</button>
    </form>
  );
}