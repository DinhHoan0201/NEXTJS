import Head from "next/head";
import { Inter } from "next/font/google";
import LandingPage from "@/components/landingPage";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <LandingPage />
    </>
  );
}
