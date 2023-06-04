import React from "react";
import RoomInfo from "./Roominfo/RoomInfo";
import ShowRoom from "./ShowRoom/ShowRoom";
import { useParams } from "react-router-dom";

function RoomDetails() {
  const { maViTri } = useParams();

  console.log(maViTri);
  return (
    <div>
      <RoomInfo maViTri={maViTri} />
      <ShowRoom maViTri={maViTri} />
    </div>
  );
}

export default RoomDetails;
