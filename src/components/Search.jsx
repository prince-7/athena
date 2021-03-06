import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";

const Search = (props) => {
  const [domain, setDomain] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setDomain(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return props.session.loggedIn ? (
    <div className="w-full h-full flex justify-center items-center">
      {submitted ? (
        <Loading />
      ) : (
        <form
          className="animate__animated animate__fadeIn"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            className="text-center border-none bg-transparent focus:outline-none text-6xl font-hairline"
            type="text"
            value={domain}
            placeholder="enter domain"
            required
          />
        </form>
      )}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Search;
