import type { NextPage } from "next";
import Head from "next/head";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Home } from "~/components/Home";

global = globalThis; //<- this should be enough

export default function Index() {
  return <Home />;
}
