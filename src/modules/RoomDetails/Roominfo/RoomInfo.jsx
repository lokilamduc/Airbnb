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
    <div id="khachSan" style={{ backgroundColor: "white" }}>
      {roomDetails?.map((item, index) => (
        <div key={index} className={styles.OverView}>
          <div className="container">
            <div className={styles.OverViewContent}>
              <div className="col-4">
                <div className={styles.ImgRoom}>
                  <img src={item.hinhAnh} alt="" />
                  <p className={styles.tienIch}>
                    Tiện ích:
                    {item.banLa && <span>bàn là,</span>}
                    {item.mayGiat && <span>máy giặt,</span>}
                    {item.tivi && <span>tivi,</span>}
                    {item.dieuHoa && <span>điều hòa,</span>}
                    {item.wifi && <span>wifi,</span>}
                    {item.bep && <span>bếp,</span>}
                    {item.doXe && <span>chổ đậu xe,</span>}
                    {item.hoBoi && <span>hồ bơi,</span>}
                    {item.banUi && <span>bàn ủi.</span>}
                  </p>
                </div>
              </div>
              <div className="col-7" style={{ marginLeft: "50px" }}>
                <div className="DetailRoom">
                  <h1 style={{ fontSize: "25px", marginBottom: "20px" }}>
                    {item.tenPhong}
                  </h1>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "80%",
                    }}
                  >
                    <p>Số Lượng Khách: {item.khach}</p>
                    <p>phòng ngủ: {item.phongNgu}</p>
                    <p>giường: {item.giuong}</p>
                    <p>phòng tắm: {item.phongTam}</p>
                  </div>

                  <p style={{ color: "gray" }}>Mô Tả: {item.moTa}</p>

                  <p>Giá Tiền Thuê: {item.giaTien}</p>
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
