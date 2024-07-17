import { Hono } from "hono";

import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products,
} from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_TOKEN,
      "PLAID-SECRET": process.env.PLAID_SECRET_TOKEN,
    },
  },
});

const client = new PlaidApi(configuration);

const app = new Hono().post(
  "/create-link-token",
  clerkMiddleware(),
  async (ctx) => {
    const auth = getAuth(ctx);

    if (!auth?.userId) {
      return ctx.json({ error: "Unauthorized" }, 401);
    }

    const token = await client.linkTokenCreate({
      user: {
        client_user_id: auth.userId,
      },
      client_name: "Sepran",
      products: [Products.Transactions],
      country_codes: [CountryCode.Us],
      language: "en",
    });

    return ctx.json({ data: token.data.link_token });
  }
);

export default app;
