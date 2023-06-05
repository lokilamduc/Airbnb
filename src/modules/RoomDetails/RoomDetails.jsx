import React from "react";
import RoomInfo from "./Roominfo/RoomInfo";
import ShowRoom from "./ShowRoom/ShowRoom";
import { useParams } from "react-router-dom";

function RoomDetails() {
  const { maViTri } = useParams();
  const { id } = useParams();

  console.log(maViTri);
  return (
    <div>
      <ShowRoom id={id} />
      <RoomInfo maViTri={maViTri} />
    </div>
  );
}

export default RoomDetails;
