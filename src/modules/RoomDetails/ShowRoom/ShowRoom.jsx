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
      {locations.map((item, index) => (
        <div key={index}>
          <img
            src={item.hinhAnh}
            alt={item.tenViTri}
            className={styles.bannerImg}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowRoom;
