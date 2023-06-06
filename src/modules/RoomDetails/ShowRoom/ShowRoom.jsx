import React, { useState, useEffect } from "react";
import { apiGetLocations } from "../../../apis/locationAPI";
import styles from "./ShowRoom.module.scss";

function ShowRoom(id) {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  const getLocations = async () => {
    try {
      const data = await apiGetLocations(id);
      console.log(data);
      setLocations(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  };
  useEffect(() => {
    getLocations(id);
  }, []);

  if (error) return null;
  return (
    <div>
      {/* {locations.map((item, index) => {
        return (
          <div key={{ index }}>
            <img src={item.id} className={styles.bannerImg} />
          </div>
        );
      })} */}
      {locations?.filter((item) => {
        if (item.id === id) {
          return <img src={item.hinhAnh} alt="" />;
        }
      })}
    </div>
  );
}

export default ShowRoom;
