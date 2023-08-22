import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "@/lib/constants";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const data = JSON.parse(req.body);
  const id = data.id;
  console.log("Called route = ", id);

  await runMiddleware(req, res, cors);

  fetch(`${API_URL}artist/${id}`, requestOptions as RequestInit)
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
