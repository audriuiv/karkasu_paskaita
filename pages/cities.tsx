import { InferGetServerSidePropsType } from "next";
import nextAuth from "./api/auth/[...nextauth]";
import type { GetServerSidePropsContext } from "next";
import type { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{ props: {} }> {
  return {
    props: {
      /*  session: await unstable_getServerSession(
        context.req,
        context.res,
        nextAuth
      ),*/
    },
  };
}

export default function Cities(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <div>daug daug miestu.....</div>;
}
