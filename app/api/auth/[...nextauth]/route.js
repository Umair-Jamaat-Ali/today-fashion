import prisma from "@/config/dbPrisma"
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
   
    try {
      console.log("credentials", credentials);
      // await prisma.user.create({
      //   data:{
      //     email: credentials.username,
      //     name: "gohar",
      //     password: credentials.password,
      //   }
      // })
     const user = await prisma.user.findFirst({
        where: {
          AND: [
            {email: credentials.username},
            {password: credentials.password}
          ]
        }
      }) 
      
      console.log("user", user);
      
    if (user) {
          return user
        }
        return null
      } 
      
    catch (error) {
      console.log("error", error);
      return null
    }
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