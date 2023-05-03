import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getOrderPage = (show_id, controller) => {
  const url = `${baseUrl}/seat/all/${show_id}`;
  return axios.get(url, {
    signal: controller.signal,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};
