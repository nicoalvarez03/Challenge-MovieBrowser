import { Link } from "react-router-dom";

const VistaPeli = (props) => {
  const { nombre, id, imagen } = props;
  return (
    <Link to={id} className="card">
      <div >
        <div className="card-image">
          <figure className="image">
            <img src={imagen} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h3>{nombre}</h3>
        </div>
      </div>
    </Link>
  );
};

export default VistaPeli;
