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
  <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Unleash Your Inner Engineer with Fun Electronics Learning!
        </h2>
        <div className="mt-4 md:mt-8">
          <Link
            href="/products"
            className="inline-block rounded bg-emerald-600 px-12 py-3 text-lg font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Explore our Kits
          </Link>
        </div>
      </div>
    </div>
    <Image height={700} width={700} alt="Circuit" src="/difficult-circuit.jpg"/>
  </section>
</>
  )
}
