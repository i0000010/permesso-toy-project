import { NextRequest, NextResponse } from 'next/server';
import { auth } from "firebase-admin";
import { getClient } from "@/lib/apollo/serverClient";
import { GetUserByIdQuery, GetUserByIdQueryVariables, GetUserByIdDocument } from "@/generated/graphql";

export async function GET(request: NextRequest, response: NextResponse) {
    const encodedSession = request.cookies.get("session")?.value || '';
    const { uid } = await auth().verifySessionCookie(encodedSession, true);
    const { data } = await getClient().query<GetUserByIdQuery, GetUserByIdQueryVariables>({
      query: GetUserByIdDocument,
      variables: {
        id: uid
      }
    });
    const user = data?.users_by_pk;
  
    if (!user) {
      return NextResponse.redirect(new URL("/protected/profile/create", request.url));
    }
    return NextResponse.redirect(new URL(`/protected/profile/${user.id}`, request.url));
}
