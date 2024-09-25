import Head from "next/head";
import SecuritySection from "../components/SecuritySection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Security</title>
        <meta
          name="description"
          content="Our commitment to data privacy and security."
        />
      </Head>
      <main>
        <SecuritySection />
      </main>
    </div>
  );
}
