import Head from "next/head";

export default function About() {
  return (
    <div
      className="bg-white px-4 "
      style={{
        margin: "40px 0px",
      }}
    >
      <Head>
        <title className="text-gray-800  ">About Brainiatic</title>
        <meta name="description" content="About Brainiatic and our mission." />
      </Head>
      <main className="max-w-4xl mx-auto text-center">
        <h1 className=" text-3xl sm:text-3xl lg:text-3xl   font-bold mb-8 text-gray-800">
          About Brainiatic
        </h1>
        <p className="text-lg mb-6 text-gray-800 ">
          <span className="font-bold">Our mission:</span> is to make Secure AI
          simple to integrate and easy to use. Our backend brain team, who
          worked in security for the Government of Canada, has a deep passion
          for AI, and is a bit like 1990s nerds — glasses taped, pens in
          pockets, and speaking Klingon. Nerd brains creating an AI brain
          birthed our name, Brainiatic.
        </p>
        <p className="text-lg mb-6 text-gray-800">
          Where AI Innovation Takes a Simple Shape, Brainiatic is where
          artificial intelligence meets unwavering security.
        </p>
        <p className="text-lg mb-6 text-gray-800">
          Our name reflects the core values to build AI that is both powerful
          and protective, fueled by our mission "brain" that prioritizes safety
          at every step. Located in Montreal, QC, we're proud to contribute to
          Canada's thriving AI ecosystem. Our commitment to keeping your data
          safe is unwavering. All data is stored securely within North America,
          ensuring the highest level of protection and compliance.
        </p>
        <p className="text-lg mb-6 text-gray-800">
          Security is our bedrock. We understand that trust is paramount when it
          comes to AI. That's why we've built Brainiatic with robust security
          measures at its core. Our team of experts is dedicated to maintaining
          the integrity and confidentiality of your information.
        </p>
      </main>
    </div>
  );
}
