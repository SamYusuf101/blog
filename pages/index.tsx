import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logaImg from "../public/loga.png";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Sa blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div
        className="flex justify-between items-center pr-3 bg-gradient-to-r from-[#daca38] to-[#be6c6c] border-y border-black
      py-10 lg:py-5"
      >
        <div className="px-10  space-y-4">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-green-600 decoration-4">
              Blog
            </span>{" "}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post what u think on any topic and connect
            with millions of people
          </h2>
        </div>
        <div className="hidden md:inline-flex w-40 lg:w-80">
          <Image src={logaImg} alt="/" />
        </div>
      </div>
      {/*posts*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div
              className="border rounded-lg border-green-500 group cursor-pointer
            overflow-hidden"
            >
              <img
                className="h-60 w-full object-cover group-hover:scale-105
                transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between p-5 bg-green-400">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
