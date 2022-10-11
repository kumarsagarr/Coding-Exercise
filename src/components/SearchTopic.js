import React, { useCallback, useRef, useState } from "react";
import { useTopics } from "../hooks/useTopics.js";
import { Item } from "./ListTopics";
import "../styles/Item.css";

export const SearchTopic = () => {
  const [search, setSearch] = useState("");
  const { topic } = useTopics(search);
  const searchInputRef = useRef(null);

  const handleClickSearch = useCallback(() => {
    setSearch(searchInputRef.current.value);
  }, []);

  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          defaultValue=""
          ref={searchInputRef}
          placeholder={"Enter a topic"}
          className="inputCls"
        />
        <button onClick={handleClickSearch} className="btn">
          Search
        </button>
      </div>
      <div className="inputContainer">
        <div>
          {search && topic.length > 0 ? (
            <p>
              {`Topics related to `}
              <b>{search}</b>
            </p>
          ) : (
            <p>
              <b>{`No results`}</b>
            </p>
          )}
          {topic &&
            topic?.map((item) => (
              <Item key={item.id} item={item} setSearch={setSearch} />
            ))}
        </div>
      </div>
    </>
  );
};
