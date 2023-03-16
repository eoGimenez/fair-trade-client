import imgFabric from "./Fabric2.jpg";
import imgHome from "./Home2.jpg";
import imgMis from "./Mis.jpg";
import imgNc from "./NC.jpg";
import "./Categorias.css";
import { Link } from "react-router-dom";

function Categorias(handleClick) {
 
  
  return (
    <>
      <div className="categorias">
        <div className="card-group w-75  mx-auto ">
            <div className="card border border-0 sm-col-2">
          <Link onClick={()=>handleClick("Home Deco")}>
              <img src={imgHome} className="card-img-top rounded" alt="..." />
          </Link>
              <div className="card-body">
                <h2 className="card-title fw-bold">Home Deco</h2>
              </div>
            </div>
          <div className="card sm-col-2 border border-0">
            <img src={imgNc} className="card-img-top rounded " alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-bold">Natural Cosmetics</h3>
            </div>
          </div>
          <div className="card sm-col-2  border border-0">
            <img src={imgFabric} className="card-img-top rounded " alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-bold">Fabric & Fashion</h3>
            </div>
          </div>
          <div className="card sm-col-2 border border-0">
            <img src={imgMis} className="card-img-top rounded " alt="..." />
            <div className="card-body">
              <h3 className="card-title fw-bold">Miscellaneous</h3>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Categorias;
