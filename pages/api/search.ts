import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "@/lib/constants";
import notify from "@/lib/notify";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const data = JSON.parse(req.body)
  const search = data.search;

  fetch(`${API_URL}/search?q=${search}`, requestOptions as RequestInit)
    .then((response) => response.text())
    .then((result) => {
      const resp = JSON.parse(result);
      console.log("search result ===", resp.data, "=====");

      // res.end("ok");
      return res.status(200).json(resp.data);
    })
    .catch((error) => {
      console.log("error", error);

      return res.status(error.status).json(error);
    });

  // res.end("ok");
};

export default handler;
