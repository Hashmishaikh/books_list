import React from "react";

const CardMapping = ({
  title,
  author,
  language,
  pages,
  year,
  country,
  link,
  id,
}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4" key={id}>
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
              Title:<span>{title}</span>
            </p>
            <p className="card-text">
              Author:<span>{author}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              Language:<span>{language}</span>{" "}
            </p>
            <p className="card-text">
              Total Pages: <span>{pages}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">
              Year: <span>{year}</span>
            </p>
            <p className="card-text">
              Country: <span>{country}</span>
            </p>
          </div>
          <p className="card-text">
            Link: <span>{link}</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CardMapping;
