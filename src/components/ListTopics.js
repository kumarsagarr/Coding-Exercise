import React, { useCallback, useRef } from 'react';
import '../styles/Item.css';

export const Item = ({ item, setSearch }) => {
  const topicRef = useRef('');

  const handleClickDiv = useCallback(() => {
    setSearch(topicRef.current.innerHTML)
  }, [setSearch]);

  return (
    <div className="item">
      <p ref={topicRef} onClick={handleClickDiv} >{item.name}</p>
      <span>{item.stargazerCount} {`⭐`}</span>
    </div>
  );
};