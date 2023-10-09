import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      /**
       * Asynchronously authorizes the user with the given credentials and request.
       *
       * @param {object} credentials - The user's credentials with which you want to authorize.
       * @param {object} req - The request object.
       * @return {object|null} The authorized user object, or null if authorization fails.
       */
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "John Smith",
          email: "jsmith@example.com",
        };

        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
