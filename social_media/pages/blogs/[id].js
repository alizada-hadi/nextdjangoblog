import React from "react";
import Layout from "../../Layout/Layout";
import Head from "next/head";

import DateFormat from "../../components/DateFormat";

const PostDetail = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Blog Detail</title>
      </Head>
      <div className="mt-32 bg-gray-50 p-[2rem]">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <DateFormat timestamp={data.created_at} />
        <p className="text-lg mt-5">{data.body}</p>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await fetch("http://localhost:8000/api/blogs/");
  const res = await data.json();
  const paths = res.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const blog = await fetch(`http://localhost:8000/api/blogs/${id}/`);
  const data = await blog.json();
  return {
    props: {
      data,
    },
  };
}

export default PostDetail;
