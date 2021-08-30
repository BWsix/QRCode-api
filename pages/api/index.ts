import type { NextApiHandler } from "next";
import QRCode from "qrcode";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url } = req.body;

  QRCode.toDataURL(url, function (err, base64) {
    if (err) return res.status(500).json({ error: err.name });

    return res.status(200).json({ data: base64, url });
  });
};

export default handler;
