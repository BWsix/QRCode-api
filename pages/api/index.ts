import type { NextApiHandler } from "next";
import QRCode from "qrcode";

const handler: NextApiHandler = async (req, res) => {
  QRCode.toFileStream(res, "https://bwsix.github.io/r/5");
  res.writeHead(200, { "Content-Type": "image/png" });
};

export default handler;
