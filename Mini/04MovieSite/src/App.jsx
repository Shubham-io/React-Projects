import React, { useState } from "react";
import Search from "./components/Search";
import Details from "./components/Details";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "ironman",
    results: [],
    selected: {},
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=5f26a663";

  const searchInput = (e) => {
    let movieInput = e.target.value;
    setState((prev) => {
      // returning the previous state but updating the name of movie entered by the user
      return { ...prev, s: movieInput };
    });
  };

  // making api call and storing the list of movies into results using setState
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        console.log(results);
        setState((prev) => {
          return {
            ...prev,
            results: results,
          };
        });
      });
    }
  };

  // getting id of selected movie and add it in selected object
  const openDetail = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prev) => {
        return {
          ...prev,
          selected: result,
        };
      });
    });
  };

  // clear selected object
  const closeDetail = () => {
    setState((prev) => {
      return { ...prev, selected: {} };
    });
  };

  
  return (
    <>
      <div className="app">
        <header>
          <h1>Movie Mania</h1>
        </header>

        <main>
          <Search searchInput={searchInput} search={search} />

          <div className="container">
            {state.results.map((item) => (
              <div
                key={item.imdbID}
                className="item"
                onClick={() => {
                  openDetail(item.imdbID);
                }}
              >
                <img style={{ width: "200px" }} src={item.Poster} />
                <h3 style={{ color: "white" }}>{item.Title}</h3>
              </div>
            ))}
          </div>

          {typeof state.selected.Title != "undefined" ? (
            <Details selected={state.selected} closeDetail={closeDetail} />
          ) : (
            false
          )}
        </main>
      </div>
    </>
  );
}

export default App;
