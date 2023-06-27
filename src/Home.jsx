import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CardMapping from "./CardMapping";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Home = () => {
  const [getMappedData, setMappedData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pagePerUsers, setPagePerUsers] = useState(5);

  const sortingup = () => {
    const sorted = [...getMappedData].sort((a, b) => {
      // a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      // a[col] - b[col]
      const first = `${a.title}`;
      const second = `${b.title}`;
      return first.localeCompare(second);
    });
    setMappedData(sorted);
    // setTypeName("Old to New")
    // setOrder("down");
  
}

const sortingdown = () => {
  const sorted = [...getMappedData].sort((a, b) => {
    // a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    // a[col] - b[col]
    const first = `${a.title}`;
    const second = `${b.title}`;
    return second.localeCompare(first);
  });
  setMappedData(sorted);
  // setTypeName("Old to New")
  // setOrder("down");

}

  const usersPerPage = parseInt(pagePerUsers);
  const pageVisited = pageNumber * usersPerPage;
  const { searchData } = useSelector((state) => state.search);
  console.log("searchDtata", searchData);
  const getData = async () => {
    try {
      const data = await axios.get(
        `http://68.178.162.203:8080/application-test-v1.1/books`
      );
      console.log("data", data.data.data);
      setMappedData(data.data.data);
    } catch (err) {
      console.log("mappedERR", err);
    }
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <Navbar getData={getData} />
      </div>
      <div className="container mb-3">
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by title
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a onClick={sortingup} className="dropdown-item" href="#">A-Z</a></li>
    <li><a onClick={sortingdown} className="dropdown-item" href="#">Z-A</a></li>
    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>
        <div className="row">
          {getMappedData
            .filter((result) => {
              if (
                result?.title.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return result;
              }
            })
            .slice(pageVisited, pageVisited + usersPerPage)
            .map((res) => (
              <CardMapping
                dataWrapped = {res}
              />
            ))}
        </div>
        <div className="mt-2">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            // this is the total counting of the page which we have divided by 5 written in state usersPerPage whic is 5
            pageCount={Math.ceil(getMappedData?.length / usersPerPage)}
            // this are the function logic for pagination
            // onClick={pageDowns}
            onPageChange={changePage}
            // this are this classes of bootstrap5 for pagination
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item page-link"}
            activeClassName={"page-item active page-active"}
            previousLinkClassName={"page-item page-link"}
            nextLinkClassName={"page-item page-link"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
