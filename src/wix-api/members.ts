import { WixClient } from "@/lib/wix-client.base";
import { members } from "@wix/members";
import { cache } from "react";

// export const getLoggedInMember = cache(
//   async (wixClient: WixClient): Promise<members.Member | null> => {
//     if (!wixClient.auth.loggedIn()) {
//       return null;
//     }

//     const memberData = await wixClient.members.getCurrentMember({
//       fieldsets: [members.Set.FULL],
//     });

//     return memberData.member || null;
//   },
// );

export const getLoggedInMember = cache(
  async (wixClient: WixClient): Promise<members.Member | null> => {
    if (!wixClient.auth.loggedIn()) {
      console.log("No logged-in user found.");
      return null;
    }

    try {
      const memberData = await wixClient.members.getCurrentMember({
        fieldsets: [members.Set.FULL],
      });

      console.log("Logged-in member data:", memberData);
      return memberData.member || null;
    } catch (error) {
      console.error("Error fetching logged-in member:", error);
      return null;
    }
  },
);
