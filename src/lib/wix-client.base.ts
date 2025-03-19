import { env } from "@/env";
import {
  backInStockNotifications,
  checkout,
  currentCart,
  orders,
  recommendations,
} from "@wix/ecom";
import { files } from "@wix/media";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";
import { reviews } from "@wix/reviews";
import { createClient, OAuthStrategy, Tokens } from "@wix/sdk";
import { collections, products } from "@wix/stores";

export function getWixClient(tokens: Tokens | undefined) {
  return createClient({
    // @ts-expect-error - Temporary workaround for SDK types
    siteId: env.NEXT_PUBLIC_WIX_SITE_ID,
    modules: {
      products,
      collections,
      currentCart,
      checkout,
      redirects,
      orders,
      recommendations,
      backInStockNotifications,
      reviews,
      members,
      files,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens,
    }),
  });
}
export type WixClient = ReturnType<typeof getWixClient>;
