import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "@/lib/constants";
import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const id = req.query.id;

  await runMiddleware(req, res, cors)

  fetch(`${API_URL}/artist/${id}/albums`, requestOptions as RequestInit)
    .then((response) => response.json())
    .then((result) => {
      console.log("search result ===", result, "=====");

      // res.end("ok");
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log("error", error);

      return res.status(500).json(error);
    });

  // res.end("ok");
};

export default handler;
