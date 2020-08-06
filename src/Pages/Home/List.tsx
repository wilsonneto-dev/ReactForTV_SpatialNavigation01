import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Focusable } from "react-js-spatial-navigation";

import IMovie from "../../models/entities/IMovie";

import styles from "./styles.module.scss";

const Details: React.FC<{
  list: Array<IMovie>;
  onSelectionChange: (movie: IMovie) => void;
}> = ({ list, onSelectionChange }) => {
  const history = useHistory();

  const navigateTo = (movieId: string) => {
    history.push(`/details/${movieId}`);
  };

  return (
    <>
      <div className={styles.list}>
        <h2>List 01</h2>
        {list.map((item) => (
          <div className={styles.item} key={`${item.id.videoId}-1`}>
            <Focusable
              onFocus={() => {
                onSelectionChange(item);
              }}
              onClickEnter={() => {
                navigateTo(item.id.videoId);
              }}
            >
              <Link to={`/details/${item.id.videoId}`}>
                <img src={item.snippet.thumbnails.medium.url} alt="testing" />
              </Link>
            </Focusable>
          </div>
        ))}
      </div>

      <div className={styles.list}>
        <h2>List 02</h2>
        {list.map((item) => (
          <div className={styles.item} key={`${item.id.videoId}-2`}>
            <Focusable
              onFocus={() => {
                onSelectionChange(item);
              }}
              onClickEnter={() => {
                navigateTo(item.id.videoId);
              }}
            >
              <Link to="details">
                <img src={item.snippet.thumbnails.medium.url} alt="testing" />
              </Link>
            </Focusable>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
