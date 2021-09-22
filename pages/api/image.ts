import type { NextApiHandler } from "next";
import QRCode from "qrcode";
import { inputValidator } from "../../src/utils";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") return res.status(200).end();

  const url = inputValidator(res, req.body);
  if (url == null) return;

  try {
    QRCode.toFileStream(res, url); // the error callback is not working :(
    res.writeHead(200, { "Content-Type": "image/png" });
  } catch (err) {
    res.status(500).json({ error: "unexpected error has occurred" });
  }
};

export default handler;
