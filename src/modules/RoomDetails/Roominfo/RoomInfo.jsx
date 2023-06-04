import React, { useEffect, useState } from "react";
import { apiGetRoomDetails } from "../../../apis/locationAPI";
import styles from "./RoomInfo.module.scss";

function RoomInfo({ maViTri }) {
  const [roomDetails, setRoomDetails] = useState([]);

  const getRoomDetails = async () => {
    try {
      const data = await apiGetRoomDetails(maViTri);
      console.log(data);
      setRoomDetails(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomDetails(maViTri);
  }, []);

  return (
    <div>
      {roomDetails?.map((item, index) => (
        <div key={index} className={styles.OverView}>
          <div className="container">
            <div className={styles.OverViewContent}>
              <div className="col-4">
                <div className={styles.ImgRoom}>
                  <img src={item.hinhAnh} alt="" />
                </div>
              </div>
              <div className="col-7" style={{ marginLeft: "50px" }}>
                <div className="DetailRoom">
                  <h1>{item.tenPhong}</h1>
                  <p>{item.moTa}</p>
                  <p>Khách: {item.khach}</p>
                  <p>
                    Tiện ích:
                    {item.mayGiat} {item.banLa} {item.tivi}
                  </p>
                  <div className={styles.button}>
                    <button>Đặc Phòng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomInfo;
