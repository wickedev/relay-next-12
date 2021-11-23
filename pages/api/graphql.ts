// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  createProxyMiddleware as proxy,
  RequestHandler,
} from "http-proxy-middleware";
import type { NextApiRequest, NextApiResponse } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const REMOTE_SERVER = process.env.REMOTE_SERVER || "localhost:8080";

const proxyHandler: RequestHandler = proxy({
  target: `https://${REMOTE_SERVER}`,
  changeOrigin: true,
  autoRewrite: true,
  logLevel: "debug",
  pathRewrite: {
    "^/api/graphql": "/graphql",
  },
}) as any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<null>
) {
  proxyHandler(req as any, res as any, () => {
    /* no op*/
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
