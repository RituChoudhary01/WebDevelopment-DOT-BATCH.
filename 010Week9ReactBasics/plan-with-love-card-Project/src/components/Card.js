import { useState } from "react";
function Card({id, image,info,price,name, removeTour}){
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name" style={{
    backgroundImage: "linear-gradient(2deg,rgb(8, 148, 255),rgb(201, 89, 221), rgb(255, 46, 46), rgb(255, 144, 4))",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    boxDecorationBreak: "clone",
  }}>{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;