import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostModal from "./PostModal";
import { useDispatch } from 'react-redux';
import { searchAction } from "./redux/action/SearchAction";

const Navbar = () => {
    const [gettingSearch, setGettingSearch] = useState("");
    const dispatch = useDispatch();
    const searchMovie = (e, data) => {
        e.preventDefault();
        dispatch(searchAction(data))
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        BookDb
                    </Link>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        Add to Book List
                    </button>
                    <form
                        className="d-flex"
                        onSubmit={(e) => searchMovie(e, gettingSearch)}
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            value={gettingSearch}
                            onChange={(e) => setGettingSearch(e.target.value)}
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
            <PostModal />
        </div>
    );
};

export default Navbar;
