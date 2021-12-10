export default function Weather(props) {

  return(
    <div className="infoWeath">
      <div>
        <p> { props.city ? 'Город: ' + props.city : props.error}</p>
        <p> {props.temp ? 'Температура: ' + props.temp : null }</p>
    </div>
   </div> 
  );
}