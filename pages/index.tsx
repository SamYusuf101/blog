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
        <title>Sam's blog</title>
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
      <div>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div>
              <img src={urlFor(post.mainImage).url()!} alt="" />
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
