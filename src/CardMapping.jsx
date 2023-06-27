import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditAction } from "./redux/action/SearchAction";

const CardMapping = ({
  dataWrapped
  // title,
  // author,
  // language,
  // pages,
  // year,
  // country,
  // link,
  // id,
}) => {
  // const allData = {
  //   title,
  //   author,
  //   language,
  //   pages,
  //   year,
  //   country,
  //   link,
  //   id,
  // };
  // console.log("allse",dataWrapped)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const EditsCard = (e,dataIds) => {
    navigate('/edit')
    console.log("isdssaaa",dataIds)
    dispatch(EditAction(dataIds))
  }
  return (
    <div className="col-sm-12 col-md-6 col-lg-4" key={dataWrapped.id}>
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          backgroundColor: "rgb(32, 32, 32)",
          border: "2px solid #959494",
        }}
      >
        <img src="/lastbook.jpg" className="card-img-top" alt="..." />
        <div className="card-body" style={{ color: "#fff" }}>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              Title:<span>{dataWrapped.title}</span>
            </p>
            <p className="card-text">
              Author:<span>{dataWrapped.author}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              Language:<span>{dataWrapped.language}</span>{" "}
            </p>
            <p className="card-text">
              Total Pages: <span>{dataWrapped.pages}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              Year: <span>{dataWrapped.year}</span>
            </p>
            <p className="card-text">
              Country: <span>{dataWrapped.country}</span>
            </p>
          </div>
          <p className="card-text">
            Link: <span>{dataWrapped.link}</span>
          </p>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <p className="btn btn-primary" onClick={(e) => EditsCard(e,dataWrapped)}>Edits info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMapping;
