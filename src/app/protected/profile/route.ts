import { NextRequest, NextResponse } from 'next/server';
// import { getClient } from "@/lib/apollo/serverClient";
// import { GetUserByIdQuery, GetUserByIdQueryVariables, GetUserByIdDocument } from "@/generated/graphql";

export async function GET(request: NextRequest, response: NextResponse) {
  const { headers } = request;
  const authorization = headers.get("authorization");
  console.log('authorization: ', authorization)
  return NextResponse.redirect(new URL("/protected/profile/create", request.url));

    // const encodedSession = request.cookies.get("session")?.value || '';
    // const { uid } = await auth().verifySessionCookie(encodedSession, true);
    // console.log('uid: ', uid)
    // const { data } = await getClient().query<GetUserByIdQuery, GetUserByIdQueryVariables>({
    //   query: GetUserByIdDocument,
    //   variables: {
    //     id: uid,
    //   }
    // });
    // const user = data?.users_by_pk;
    // console.log('data: ', data);
  
    // if (!user) {
    //   return NextResponse.redirect(new URL("/protected/profile/create", request.url));
    // }
    // return NextResponse.redirect(new URL(`/protected/profile/${user.id}`, request.url));
}
