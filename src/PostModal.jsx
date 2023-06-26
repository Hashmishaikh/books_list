import axios from "axios";
import React, { useState } from "react";

const PostModal = ({ getData }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [language, setLanguage] = useState("");
    const [page, setPage] = useState("");
    const [year, setYear] = useState("");
    const [country, setCountry] = useState("");
    const [link, setLink] = useState("");
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
        try {
            const thisData = await axios.post(
                `http://68.178.162.203:8080/application-test-v1.1/books`,
                dataBundle
            );
            console.log("thisDtata", thisData);
            window.alert(thisData.data.message)
            setTitle("");
            setAuthor("");
            setLanguage("");
            setCountry("");
            setPage("");
            setLink("");
            setYear("")
        } catch (err) {
            //   console.log("postError", err);
            window.alert(err.response.data.message)
        }
        getData()
    };
    return (
        <div style={{ color: "black" }}>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Add your Book
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
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
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label"
                                        >
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
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label"
                                        >
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
                                        <label
                                            htmlFor="exampleInputPassword1"
                                            className="form-label"
                                        >
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
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
