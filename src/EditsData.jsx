import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditsData = () => {
  const { editData } = useSelector((state) => state.search);
  const [title, setTitle] = useState(editData.title);
  const [author, setAuthor] = useState(editData.author);
  const [language, setLanguage] = useState(editData.language);
  const [page, setPage] = useState(editData.page);
  const [year, setYear] = useState(editData.year);
  const [country, setCountry] = useState(editData.country);
  const [link, setLink] = useState(editData.link);
  const navigate = useNavigate();

  const backtoHome = () => {
    navigate('/')
  }

  // console.log("editss",editData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submits", title, year, country);
    const dataBundle = {
      title: title,
      author: author,
      language: language,
      page: page,
      year: year,
      country: country,
      link: link,
    };
    console.log("submits", dataBundle);
    try {
      const thisData = await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${editData.id}`,
        dataBundle
      );
      // console.log("thisDtata", thisData);
      window.alert(thisData.data.message);
      navigate("/");
    } catch (err) {
      console.log("postError", err);
      window.alert(err.response.data.message);
    }
  };
  return (
    <div>
        
    <div
      className="card mt-4"
      style={{
        marginTop:"30px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40rem",
        backgroundColor: "rgb(32, 32, 32)",
        border:"1px solid #fff"
      }}
    >
      <div className="card-body">
      <button className="btn btn-sm btn-secondary mb-3" onClick={backtoHome}>go back</button>
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="title"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form-control"
                placeholder="author"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Language
              </label>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-control"
                placeholder="language"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Total Pages
              </label>
              <input
                type="number"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="form-control"
                placeholder="enter total number page"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="d-flex gap-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Year
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="form-control"
                placeholder="year"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-control"
                placeholder="country"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Link
            </label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="form-control"
              placeholder="https://www.google.com"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditsData;
