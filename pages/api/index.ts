import type { NextApiHandler } from "next";
import QRCode from "qrcode";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url } = req.body;

  QRCode.toString(url, function (err, string) {
    if (err) return res.status(500).json({ error: err.name });

    res.status(200).json({ data: string });
  });
};

export default handler;
