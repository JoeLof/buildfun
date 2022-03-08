//FeaturedPark.js

function FeaturedPark(props){
    return (
      <div>
        <h2>This week's featured park is: {props.name}</h2>
        <button onClick={props.removePark}>Remove This Park!</button>
      </div>
    );
}
export default FeaturedPark;