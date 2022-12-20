import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import Head from "next/head";

import { useRouter } from "next/router";

const blogForm = ({ date = {} }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const data = { title, body };

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    router.push("/");
    return response.json();
  };

  return (
    <Layout>
      <Head>
        <title>New Blog</title>
      </Head>
      <form className="mt-32" onSubmit={submitHandler}>
        <div className="mb-6">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Blog title"
            required
          />
        </div>
        <div>
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What are you thinking about?"
          ></textarea>
        </div>
        <button className="px-12 py-3 mt-10 rounded-xl font-semibold bg-blue-900 text-white text-lg">
          Create
        </button>
      </form>
    </Layout>
  );
};

export default blogForm;
