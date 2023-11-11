import Head from "next/head"
import Image from "next/image"
import start from "/public/555-blinker/start1.JPG"
import power from "/public/555-blinker/555power1.JPG"
import ground from "/public/555-blinker/555ground1.JPG"
import threshhold from "/public/555-blinker/threshhold1.JPG"

export default function Home() {
  return (
    <>
    <Head>
    <title>e-tronix</title>
    <meta name="description" content="Learn electronics by building"></meta>
    </Head>
      <div className="grid justify-center content-center mb-8">
        <div>
          <h1 className="text-5xl mt-12 font-bold text-black">555 blinker circuit</h1>
          <h1 className="text-3xl ml-8 mt-10 font-bold text-black">about 20 minutes</h1>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <h1 className="text-3xl font-bold text-black"> requirements (everything comes in the box):</h1>
          <ul className="ml-8 mt-6 text-xl font-semibold text-black">
            <li>
              1x 555 timer
            </li>
            <li>
              1x 10μF Capacitor
            </li>
            <li>
              1x 8200Ω Resistor
            </li>
            <li>
              1x 68000Ω Resistor
            </li>
            <li>
              1x 200Ω Resistor
            </li>
            <li>
              1x LED
            </li>
            <li>
              5x Wires
            </li>
            <li>
              1x Breadboard
            </li>
            <li>
              1x Battery + Cables
            </li>
          </ul>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <Image src={start} height={500} width={500} alt="start image" />
          <h2 className="text-2xl mt-4 font-semibold">- What the start should look like</h2>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <Image src={power} height={500} width={500} alt="start image" />
          <h2 className="text-3xl mt-4 font-semibold">Step 1:</h2>
          <h2 className="text-2xl mt-4 font-semibold">Connect the power(+) wire to pin 8 on the IC from the red rail, this allows power to enter our circuit from the battery</h2>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <Image src={ground} height={500} width={500} alt="start image" />
          <h2 className="text-3xl mt-4 font-semibold">Step 2:</h2>
          <h2 className="text-2xl mt-4 font-semibold">Connect the ground(-) wire to pin 1 on the IC from the blue rail, this allows power to exit our circuit towards the battery</h2>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <Image src={threshhold} height={500} width={500} alt="start image" />
          <h2 className="text-3xl mt-4 font-semibold">Step 3:</h2>
          <h2 className="text-2xl mt-4 font-semibold">Connect a wire from pin 6 (threshold) on the IC to pin 2 (trigger), this makes the timer trigger every time it reaches a specific voltage thus making the timer "blink"</h2>
        </div>
        <div className="rounded p-8 mt-10 max-w-6xl rounded-xl bg-blue-500">
          <h2 className="text-3xl mt-4 font-semibold">Conclusion: </h2>
          <h2 className="text-2xl mt-4 font-semibold">Congratulations ! Mabrook! Now you've built a blinking circuit using a 555 timer and this is just the start of your journey into electronics. Contact: 01011160288 to get more kits like this one !</h2>
        </div>
    </div>
    </>
  )
}
