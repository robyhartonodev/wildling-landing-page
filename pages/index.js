import Head from "next/head";
import Footer from "../components/Footer";
import AboutUs from "../components/section/AboutUs";
import Number from "../components/section/Number";
import Product from "../components/section/Product";
import ProductOverlap from "../components/section/ProductOverlap";
import Sponsor from "../components/section/Sponsor";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wildling - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sponsor></Sponsor>
      <AboutUs></AboutUs>
      <Product></Product>
      <Number></Number>
      <ProductOverlap></ProductOverlap>

      <Footer></Footer>
    </div>
  );
}
