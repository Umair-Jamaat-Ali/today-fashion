import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


const authOption = {providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
    
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]}

const handler = NextAuth()

export { handler as GET, handler as POST }