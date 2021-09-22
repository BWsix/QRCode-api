import type { NextApiHandler } from "next";
import QRCode from "qrcode";
import { inputValidator } from "../../src/utils";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") return res.status(200).end();

  const url = inputValidator(res, req.body);
  if (url == null) return;

  QRCode.toString(url, function (err, str) {
    if (err)
      return res.status(500).json({ error: "unexpected error has occurred" });

    res.status(200).json({ data: str });
  });
};

export default handler;
