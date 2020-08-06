import React, { useState, useEffect } from "react";

import IMovie from "../../models/entities/IMovie";
import IListResponse from "../../models/dtos/ApiYT/IListResponse";

import List from "./List";

import api from "../../services/api";

import styles from "./styles.module.scss";
import Details from "./Details";

const Home: React.FC = () => {
  const [list, setList] = useState<Array<IMovie>>([]);
  const [selectedItem, setSelectedItem] = useState<IMovie>(null);

  const fetchData = async () => {
    const { data } = await api.get<IListResponse>(
      "/json/pba-channel-list.json"
    );
    setList(data.items);
  };

  const onSelectionChange = (movie: IMovie) => {
    setSelectedItem(movie);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.details}>
          {selectedItem && <Details movie={selectedItem} />}
        </div>
        <div className={styles.sections}>
          <List onSelectionChange={onSelectionChange} list={list} />
        </div>
      </div>
    </>
  );
};

export default Home;
