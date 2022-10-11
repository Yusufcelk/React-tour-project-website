import "./card.scss";
import { data } from "../../helper/data";

const Card = () => {
//   console.log(data);
  return (
    <div className="card-container">
      {data.map((card) => {
        return (
          <div className="card">

            <div className="title">
              <h2>{card.title}</h2>
            </div>
            
            <img src={card.image} alt="" />
            
            <div className="card-over">
                <p>
                    {card.desc}
                </p>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Card;
