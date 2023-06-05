import axiosClient from "./axiosClient";

export const apiGetLocations = async (id) => {
  const { data } = await axiosClient.get("/vi-tri", {
    params: {
      id: id,
    },
  });
  return data;
};

export const apiGetRoomDetails = async (maViTri) => {
  const { data } = await axiosClient.get("/phong-thue/lay-phong-theo-vi-tri", {
    params: {
      maViTri: maViTri,
    },
  });

  return data;
};
