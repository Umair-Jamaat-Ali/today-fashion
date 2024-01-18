import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const authOption = {
    providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
    const user = { email:"umairjamaat@gmail.com", fullName : "Umair Jamaat Ali", password:"11223344"}
        if (user) {
          return user
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  page:{
    singIn : "/login",
  }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }