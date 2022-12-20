import Link from "next/Link";
import Head from "next/head";

import Layout from "../Layout/Layout";
import DateFormat from "../components/DateFormat";

export default function Home({ response }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="mt-32">
          <Link
            href={"blogs/blogForm"}
            className="px-10 py-3 rounded-xl border-2 bg-gray-50"
          >
            New Blog
          </Link>
          {response.map((item) => (
            <div
              key={item.id}
              className="my-4 bg-gray-50 p-[2rem] rounded-xl shadow-sm border-2"
            >
              <h1 className="text-xl font-semibold tracking-wide text-gray-700 hover:underline hover:cursor-pointer">
                <Link href={`/blogs/${item.id}`}>{item.title}</Link>
              </h1>
              <DateFormat timestamp={item.created_at} />
              <p className="text-lg mt-5">{item.body.substring(0, 200)}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:8000/api/blogs/");
  const response = await data.json();
  return {
    props: {
      response,
    },
  };
}
