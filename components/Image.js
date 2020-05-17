const Image = (props) => (
    <img
        key={props.imageName}
        style={{ width: "20%", height: "20%" }}
        alt="image"
        src={"http://localhost:5000/images/" + props.imageName}/>
    );

export default Image;