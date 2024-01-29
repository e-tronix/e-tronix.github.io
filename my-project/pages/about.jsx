import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
    <Head>
    <title>E-tronix Egypt</title>
    <meta name="description" content="Learn electronics by building"></meta>
    </Head>
    <Navbar />
    <div className="flex items-center flex-col mx-auto w-64 text-center">
        <p className="text-lg font-bold">
            Welcome to E-tronix, founded in 2024. We're here to make learning electronics and computers a blast! Our mission is to turn education into an adventure, where circuits come alive, and coding becomes captivating. Join us for a fun and innovative approach to discovering the exciting world of electronics!
        </p>
        <Link
            href="/kits"
            className="mt-8 inline-block rounded bg-emerald-600 px-12 py-3 text-md font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
            Explore our Kits
        </Link>
    </div>
    </>
  )}