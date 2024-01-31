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
    <div className="flex justify-center mb-8">
      <h1 className="text-bold text-4xl">Our Kits:</h1>
    </div>
    <div className="flex flex-col sm:flex-row items-center rounded-lg border border-black mx-auto w-10/12 overflow-hidden">
    <Image height={300} width={600} alt="555 blinker" src={'/difficult-circuit.jpg'} className="md:rounded-l-md object-cover"/>
  <div className="w-full p-4 flex flex-col justify-between">
    <div>
      <h1 className="font-semibold text-xl mt-4 mb-2 md:text-2xl lg:text-3xl">555 Blinker (200 LE)</h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit odio eligendi alias exercitationem cumque molestias animi error sequi aut ad veniam facilis, minima maxime illo ipsam reiciendis labore fuga pariatur!
      </p>
    </div>
    <div className="flex mt-8 self-end">
      <Link
        href="/circuits/555-blinker"
        className="md:mr-4 inline-block rounded bg-emerald-600 px-6 py-2 text-sm md:text-base lg:text-lg font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Tutorial
      </Link>
    </div>
    <p className="mt-4 md:mt-0 font-semibold">Call or send a message on whatsApp to 01011160288 to order !</p>
  </div>
</div>
<div className="flex justify-center mt-12">
      <h1 className="text-bold text-3xl">More Kits Coming Soon !</h1>
    </div>

    </>
  )}