import { NextApiResponse } from "next";

export function inputValidator(res: NextApiResponse, input: ApiInput) {
  const err = (error: string) => {
    res.status(400).json({ error });
  };

  const { url } = input;

  if (url == null) return err("there's no url in the request body");
  if (typeof url !== "string") return err("url is not a string");
  if (url === "") return err("url is an empty string");

  return url;
}
