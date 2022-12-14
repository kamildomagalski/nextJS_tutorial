import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
// this file is not used in project, only for educational purposes
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      {/* We will not use this FB script. Only to show how it looks like. */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
    </Layout>
  );
}
