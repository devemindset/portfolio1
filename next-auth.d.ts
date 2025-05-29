import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session extends DefaultSession{
        accessToken?: string;
        socialId?: string;
    }

    interface JWT extends DefaultJWT{
        accessToken?: string;
        socialId?: string;
    }
}