import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex w-100 vh-100 flex-column justify-content-center align-items-center bg-light ">
      <div className="w-50 rounded bg-white pb-5  shadow p-4 mt-3 px-5">
        <h1>Details of Users</h1>
        <div className="mb-2">
          <strong>Name : {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Eail : {data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone : {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className=" btn btn-success mx-3">
          Edit
        </Link>
        <Link to={`/`} className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
