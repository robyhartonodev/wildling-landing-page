import Head from "next/head";
import Nav from "../components/Nav";
import Sponsor from "../components/section/Sponsor";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wildling - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>

      <Sponsor></Sponsor>
    </div>
  );
}
