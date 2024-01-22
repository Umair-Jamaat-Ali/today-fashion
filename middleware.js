// import { withAuth } from "next-auth/middleware"
// import { getServerSession } from "next-auth"

// export default withAuth(

    
//      function middleware (req) {
    
//   // const user = await getServerSession();
//   // if (!user) {
//   //   redirect("/login")
//   // }
//   // console.log("user",user);
//     console.log(req.nextauth.token)
//   },
//   {
//     secret: process.env.NEXTAUTH_SECRET
//   }
// )

// export const config = { matcher: ["/", "/menProduct", "/womenProducts", "/kidsProduct", "/contact"] }


import { withAuth } from "next-auth/middleware";
import { getServerSession } from "next-auth";

export default withAuth(
  async function middleware(req, res) {
    const user = await getServerSession();
    if (!user) {
      return res.redirect("/login");
    }
    console.log("user", user);
    console.log(req.nextauth.token);
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
  }
);

export const config = { matcher: ["/", "/menProduct", "/womenProducts", "/kidsProduct", "/contact"] };
