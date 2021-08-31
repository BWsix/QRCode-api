import type { NextApiHandler } from "next";
import QRCode from "qrcode";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") return res.status(200).end();

  const { url } = req.body;

  QRCode.toDataURL(url, function (err, base64) {
    if (err) return res.status(500).json({ error: err.name });

    const decoded = base64.replace("data:image/png;base64,", "");
    const imageResp = new Buffer(decoded, "base64");

    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": imageResp.length,
    });
    res.end(imageResp);
  });
};

export default handler;
