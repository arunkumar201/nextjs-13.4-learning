import NextAuth from "next-auth";
import { authOptions } from "@/helper/AuthOptions";
import { connect } from "@/dbConfig/dbConfig";
connect()

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
