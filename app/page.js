"use client"
import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {

  const [isopen1, setisopen1] = useState(false);
  const [isopen2, setisopen2] = useState(false);
  const [isopen3, setisopen3] = useState(false);
  const [isopen4, setisopen4] = useState(false);
  const [isopen5, setisopen5] = useState(false);
  const [isopen6, setisopen6] = useState(false);
  const [isopen7, setisopen7] = useState(false);

  const toggleAnswer1 = () => setisopen1(!isopen1);
  const toggleAnswer2 = () => setisopen2(!isopen2);
  const toggleAnswer3 = () => setisopen3(!isopen3);
  const toggleAnswer4 = () => setisopen4(!isopen4);
  const toggleAnswer5 = () => setisopen5(!isopen5);
  const toggleAnswer6 = () => setisopen6(!isopen6);
  const toggleAnswer7 = () => setisopen7(!isopen7);


  const Router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    Router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <Navbar />
      <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2">
        <div className=" justify-center flex flex-col ml-[8vw] gap-5">
          <h1 className={`text-[#D2E823] font-extrabold tracking-tight mt-32 text-5xl ${poppins.className}`}>Everything you are. In one, simple link in bio.</h1>
          <p className="text-[#D2E823] text-xl">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-2 rounded-lg" type="text" placeholder="Enter your handle" />
            <button onClick={() => createTree()} type="button" className="text-slate-950 bg-[#E3BAE4] hover:bg-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Claim your Linktree</button>
          </div>

        </div>
        <div className="items-center justify-center flex flex-col mr-[10vw]">
          <img className="mt-40 ml-16" src="/home.png" alt="Homepage image" />
        </div>
      </section>

      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-2">
        <div className="items-center justify-center flex flex-col mr-[10vw]">
          <img className="mt-28 ml-16" src="/home2.png" alt="Homepage image" />
        </div>

        <div className=" flex flex-col gap-5 mt-24">
          <h1 className={`text-[#502274] font-extrabold tracking-tight mt-24 text-6xl ${poppins.className}`}>Create and customize your Linktree in minutes</h1>
          <p className="text-[#502274] text-lg font-semibold">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
          <div>
            <Link href={'/generate'}><button type="button" className="text-[#FFF9FB] bg-[#502274] hover:bg-[#5E347F] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get started for free</button></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
        <div className=" justify-center flex flex-col ml-[8vw] gap-5">
          <h1 className={`text-[#E9C0E9] font-extrabold tracking-tight mt-32 text-5xl ${poppins.className}`}>Share your Linktree from your Instagram, TikTok, Twitter and other bios</h1>
          <p className="text-[#E9C0E9] text-lg font-semibold">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
          <div className="input flex gap-2">
            <Link href={'/generate'}><button type="button" className="text-slate-950 bg-[#E3BAE4] hover:bg-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get started for free</button></Link>
          </div>
        </div>
        <div className="items-center justify-center flex flex-col mr-[10vw]">
          <img className="mt-40 ml-16" src="/home3.png" alt="Homepage image" />
        </div>
      </section>

      <section className="bg-[#F3F3F1] min-h-[105vh] grid grid-cols-2">
        <div className="items-center justify-center flex flex-col mr-[10vw]">
          <img className="mt-28 ml-16" src="/home4.png" alt="Homepage image" />
        </div>
        <div className=" flex flex-col gap-5 mt-24">
          <h1 className={`text-[#1E2330] font-extrabold tracking-tight mt-24 text-5xl ${poppins.className}`}>Analyze your audience and keep your followers engaged</h1>
          <p className="text-[#1E2330] text-lg font-semibold">Track your engagement over time, monitor revenue and learn what's converting your audience. Make informed updates on the fly to keep them coming back.</p>
          <div>
            <Link href={'/generate'}><button type="button" className="text-[#1E2330] bg-[#E3BAE4] hover:bg-[#E9C0E9] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get started for free</button></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F1] min-h-[530vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[#1E2330] font-extrabold text-5xl">The only link in bio trusted by 50M+</h1>
          <span className="text-[#2665D6] font-extrabold text-6xl">creators</span>
        </div>
        <div>
          <img className="mt-5" src="/home5.png" alt="screenshot" />
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5 ml-8">
            <div className="h-auto bg-[#E9C0E9] p-5 rounded-3xl">
              <img className="mb-5" src="/home6.png" alt="home6" />
              <p className="m-8 text-[#502274] underline font-semibold text-4xl">Share your content in limitless ways on your Linktree.</p>
            </div>
            <div className="h-auto bg-[#D2E823] p-5 rounded-3xl">
              <img className="mb-5" src="/home7.png" alt="home7" />
              <p className="m-8 text-[#1E2330] underline font-semibold text-4xl">Sell products and collect payments. It's monetization made simple.</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="h-full bg-[#780016] p-5 mr-8 rounded-3xl">
            <img className="m-20" src="/home8.png" alt="home8" />
            <p className="mt-28 text-[#E9C0E9] underline font-semibold text-4xl ">Grow, own and engage your audience by unifying them in one place.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="mt-28 text-[#1E2330] font-bold text-5xl">The fast, friendly and powerful link in bio tool.</h1>
        </div>
        <div className="flex justify-center mt-8">
          <button type="button" className="text-[#1E2330] bg-[#E3BAE4] hover:bg-[#E9C0E9] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Explore all plans</button>
        </div>
        <div className="cards mt-10 flex justify-evenly">
          <div className="card1 flex flex-col justify-between items-center bg-[#FFFFFF] h-96 w-96 rounded-3xl">
            <img className="mt-12" src="/home9.png" alt="home9" />
            <p className="font-semibold text-center p-5 mb-2 text-lg">Seamlessly connect your Linktree with the tools you already use.</p>
          </div>
          <div className="card2 flex flex-col justify-between items-center bg-[#FFFFFF] h-96 w-96 rounded-3xl">
            <img className="mt-6" src="/home10.png" alt="home10" />
            <p className="font-semibold text-center p-2 mb-7 text-lg">Customize your Linktree to match your brand. Make it feel like you.</p>
          </div>
          <div className="card3 flex flex-col justify-between items-center bg-[#FFFFFF] h-96 w-96 rounded-3xl">
            <img className="mt-8" src="/home11.png" alt="home11" />
            <p className="font-semibold text-center p-5 mb-10 text-lg">Manage, update and schedule content with our quick, easy editor.</p>
          </div>
        </div>
        <div className="featured mt-20 flex justify-center">
          <h1 className="text-[#1E2330] font-extrabold text-6xl">As featured in...</h1>
        </div>
        <div className="magazines grid grid-cols-4 gap-4 justify-items-center mt-14">
          {/* First row: Four cards */}
          <div className="card1 bg-[#FFFFFF] h-20 w-64 rounded-3xl shadow-md flex justify-center items-center">
            <img src="/tc.jpg" alt="TC Logo" className="h-12" />
          </div>
          <div className="card2 bg-[#FFFFFF] h-20 w-64 rounded-3xl shadow-md flex justify-center items-center">
            <img src="/insider.png" alt="Insider Logo" className="h-20 w-auto" />
          </div>
          <div className="card3 bg-[#FFFFFF] h-20 w-64 rounded-3xl shadow-md flex justify-center items-center">
            <img src="/marshable.png" alt="Mashable Logo" className="h-20" />
          </div>
          <div className="card4 bg-[#FFFFFF] h-20 w-64 rounded-3xl shadow-md flex justify-center items-center">
            <img src="/fortune.jpg" alt="Fortune Logo" className="h-12" />
          </div>

          {/* Second row: Centered card */}
          <div className="card5 bg-[#FFFFFF] h-20 w-64 rounded-3xl shadow-md flex justify-center items-center col-span-4 place-self-center">
            <img src="/forbes.png" alt="Forbes Logo" className="h-12" />
          </div>
        </div>
        <div className="person flex flex-col items-center mt-20">
          <img className="h-96 w-auto mx-auto" src="/home12.png" alt="capture" />
          <div className="flex flex-col items-center text-center">
            <p className="font-bold text-[#1E2330] text-4xl text-center max-w-3xl mx-auto">“My Linktree resume stood out from the rest, securing me my first full-time job as a TV reporter!”</p>
            <span className="text-[#7A7A7A] text-lg font-semibold mt-3">Risa Utama,</span>
            <span className="text-[#7A7A7A] text-lg font-semibold">TV Reporter and Producer</span>
            <div className="flex mt-4 gap-4">
              <button className="bg-[#E0E0E0] w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
                <span className="text-[#1E2330] text-lg">&larr;</span> {/* Left Arrow */}
              </button>
              <button className="bg-[#E0E0E0] w-10 h-10 flex items-center justify-center rounded-lg shadow-md">
                <span className="text-[#1E2330] text-lg">&rarr;</span> {/* Right Arrow */}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#780016] min-h-[140vh]">
        <div className="heading flex justify-center">
          <h1 className="text-[#E9C0E9] font-extrabold text-5xl mt-24">Got questions?</h1>
        </div>
        <div className="questions flex flex-col justify-center items-center mt-10 space-y-4">
          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">Why do I need a link in bio tool?</p>
              <button onClick={toggleAnswer1} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen1 ? '▲' : '▼'}
              </button>
            </div>

            {/* Answer inside the card */}
            {isopen1 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  Right now, every time you've got something new to share, you have to go to every single one of your channels
                  to change the link in each of your bios. It's time-consuming and complicated, making it much harder to keep
                  everything up to date.
                  <br /><br />
                  A link in bio tool means you never have to compromise or remove one link from your bio to add another. You can
                  keep everything you want to share online in one link. When you've got a change, you only ever have to make it once.
                </p>
              </div>
            )}
          </div>


          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">Is Linktree the original link in bio tool?</p>
              <button onClick={toggleAnswer2} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen2 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen2 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  The short answer? Yes!
                  <br /><br />
                  Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution-but that's just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don't have a website, that's fine. If you have a Linktree, you don't need one!
                </p>
              </div>
            )}
          </div>


          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">Can you get paid and sell things from a Linktree?</p>
              <button onClick={toggleAnswer3} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen3 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen3 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.
                  <br /><br />
                  A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won't even need to leave your social media to go to another site and pay!
                  <br /><br />
                  <span className="font-semibold font-serif">“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany</span>
                </p>
              </div>
            )}
          </div>


          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">Is Linktree safe to use on all of my social media profiles?</p>
              <button onClick={toggleAnswer4} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen4 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen4 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok's own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.
                </p>
              </div>
            )}
          </div>


          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">What makes Linktree better than the other link in bio options?</p>
              <button onClick={toggleAnswer5} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen5 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen5 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let's hear what they have to say:
                  <br /><br />
                  <span className="font-semibold font-serif">“Four months into creating, someone messaged me like: You need a Linktree. I can't remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god-why did I spend $100 on a website? I don't need all of that! Now, I can see the monetization of my following becoming a full-time thing.”-David Colema</span>n
                  <br /><br />
                  <span className="font-semibold font-serif">”It's so much easier to set up and have all of your links in one place in a well designed format.”-Catie T</span>
                  <br /><br />
                  <span className="font-semibold font-serif">”Websites are cool (I have one) but Linktrees just make it so much easier.”-Tan Nguyen</span>
                  <br /><br />
                  Linktree invented the bio link tool in 2016, and it continues to be the world's most popular bio link to this day-with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!
                </p>
              </div>
            )}
          </div>

          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">How can I drive more traffic to and through my Linktree?</p>
              <button onClick={toggleAnswer6} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen6 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen6 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.
                  <br /><br />
                  Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they're coming from, and what they're clicking on. You can immediately see what's working and what's not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!
                </p>
              </div>
            )}
          </div>

          <div className="card1 w-1/2 bg-[#51000F] rounded-3xl flex flex-col px-6 py-4">
            {/* Question Text and Arrow Button */}
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#E9C0E9] text-xl">Do I need a website to use Linktree?</p>
              <button onClick={toggleAnswer7} className="text-[#E9C0E9] text-2xl transform transition-transform">
                {isopen7 ? '▲' : '▼'}
              </button>
            </div>
            {/* Answer inside the card */}
            {isopen7 && (
              <div className="answer mt-4 text-[#E9C0E9] text-lg">
                <p>
                  No, you don't! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that's great: you can add it to your Linktree.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="bg-[#502274] min-h-[260vh]">
        <div className="heading flex justify-center">
          <h1 className="text-[#E9C0E9] text-6xl font-bold mt-12 text-center">
            <span>Jumpstart your corner of</span>
            <br />
            <span>the internet today</span>
          </h1>
        </div>
        <div className="input flex justify-center gap-2 mt-10">
          <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-2 rounded-lg" type="text" placeholder="Enter your handle" />
          <button onClick={() => createTree()} type="button" className="text-slate-950 bg-[#CDE026] hover:bg-[#B6C920] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Claim your Linktree</button>
        </div>
        <div className="card flex justify-center">
          <div className="card1 bg-[#FFFFFF] mt-10 rounded-3xl p-10 flex flex-col justify-between" style={{ height: '550px', width: '1200px' }}>
            {/* Footer */}
            <div className="footer text-[#333333] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>The Linktree Blog</li>
                    <li>Engineering Blog</li>
                    <li>Marketplace</li>
                    <li>What's New</li>
                    <li>About</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Link in Bio</li>
                    <li>Social Good</li>
                    <li>Contact</li>
                  </ul>
                </div>

                {/* Community */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Community</h3>
                  <ul className="space-y-2">
                    <li>Linktree for Enterprise</li>
                    <li>2023 Creator Report</li>
                    <li>2022 Creator Report</li>
                    <li>Charities</li>
                    <li>What's Trending</li>
                    <li>Creator Profile Directory</li>
                    <li>Explore Templates</li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li>Help Topics</li>
                    <li>Getting Started</li>
                    <li>Linktree Pro</li>
                    <li>Features & How-Tos</li>
                    <li>FAQs</li>
                    <li>Report a Violation</li>
                  </ul>
                </div>

                {/* Trust & Legal */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Trust & Legal</h3>
                  <ul className="space-y-2">
                    <li>Terms & Conditions</li>
                    <li>Privacy Notice</li>
                    <li>Cookie Notice</li>
                    <li>Trust Center</li>
                    <li>Cookie Preferences</li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="buttons">
              <Link href={'/login'}><button type="button" className="text-black font-bold bg-[#E9E9E9] hover:bg-[#D6D6D6] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-base px-7 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition duration-300 ease-in-out">Log in</button></Link>
              <button onClick={() => createTree()} type="button" className="text-slate-950 bg-[#CDE026] hover:bg-[#B6C920] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get started for free</button>
            </div>
          </div>
        </div>
        <div className="linktree flex justify-center">
          <div className="bg-[#E9C0E9] mt-10 rounded-3xl flex justify-center items-center" style={{ height: '400px', width: '1200px' }}>
            <svg className="h-48" viewBox="0 0 1176 238" title="Linktree Logo" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.5326H33.7257V202.802H127.205V233.988H0V25.5326ZM160.564 25.5326C172.111 25.5326 181.642 34.469 181.642 45.9586C181.642 57.6307 172.111 66.9318 160.564 66.9318C148.833 66.9318 139.485 57.6307 139.485 45.9586C139.485 34.469 148.833 25.5326 160.564 25.5326ZM144.067 83.7103H176.51V233.988H144.067V83.7103ZM195.572 83.7103H228.015V104.501C237.546 88.6345 254.042 79.6981 275.854 79.6981C311.046 79.6981 333.041 107.054 333.041 150.46V233.988H300.598V153.378C300.598 125.292 288.318 109.425 265.956 109.425C241.579 109.425 228.015 126.021 228.015 156.113V233.988H195.572V83.7103ZM350.087 25.5326H382.53V157.39L443.016 83.8927H483.707L419.188 159.031L483.707 233.988H443.016L382.53 160.673V233.988H350.087V25.5326ZM496.354 45.4114H529.347V83.7103H567.838V110.519H529.347V187.847C529.347 197.695 535.395 203.713 544.743 203.713H566.372V233.988H540.344C512.117 233.988 496.354 217.392 496.354 187.847V45.4114ZM584.5 83.7103H614.577V102.313C622.642 88.0873 636.022 79.6981 652.519 79.6981C657.468 79.6981 660.217 79.8805 663.883 81.1571V111.249C661.683 110.702 658.384 110.155 651.786 110.155C627.958 110.155 614.761 130.034 614.761 164.503V233.988H582.318V83.7103H584.5ZM739.582 79.6981C775.324 79.6981 813.999 101.218 813.999 162.314V166.691H697.792C700.358 193.5 715.938 208.273 741.965 208.273C760.661 208.273 776.607 198.242 780.09 184.199H813.082C809.783 214.291 778.44 238 741.965 238C695.226 238 665.899 207.726 665.899 158.667C665.899 115.261 694.309 79.6981 739.582 79.6981ZM779.54 139.882C774.958 121.28 760.294 109.608 739.766 109.608C719.97 109.608 706.04 121.644 700.541 139.882H779.54ZM902.162 79.6981C937.904 79.6981 976.578 101.218 976.578 162.314V166.691H860.372C862.938 193.5 878.517 208.273 904.545 208.273C923.241 208.273 939.187 198.242 942.669 184.199H975.662C972.363 214.291 941.02 238 904.545 238C857.805 238 828.479 207.726 828.479 158.667C828.479 115.261 856.706 79.6981 902.162 79.6981ZM941.936 139.882C937.354 121.28 922.691 109.608 901.979 109.608C882.183 109.608 868.253 121.644 862.754 139.882H941.936ZM984.643 79.1509H1042.56L1001.32 40.1226L1024.05 16.9609L1063.28 57.0835V0H1097.37V57.0835L1136.59 16.9609L1159.32 40.1226L1118.08 79.1509H1176V111.431H1117.71L1159.14 151.554L1136.41 174.169L1080.14 117.815L1023.87 174.169L1001.14 151.554L1042.56 111.431H984.277V79.1509H984.643ZM1063.46 157.572H1097.55V234.17H1063.46V157.572Z" fill="#502274"></path></svg>
          </div>
        </div>
        <div className="footer flex justify-center gap-8 mt-28">
          <img className="h-20" src="https://edge.website.production.linktr.ee/static/96c2a29111e646b92873af7c1bc1beab/f88ff/aboriginal-flag.png" alt="flag1" />
          <img className="h-20" src="https://edge.website.production.linktr.ee/static/0b8d53316d37e6dde1befae94ac1969c/8cca9/torres-strait-islander-flag.png" alt="flag2" />
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <p className="text-[#E9C0E9] font-semibold text-lg">We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin</p>
          <span className="text-[#E9C0E9] font-semibold text-lg">Nation, and pay our respects to Elders past, present and emerging.
          Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville</span> 
          <span className="text-[#E9C0E9] font-semibold text-lg">st, Collingwood VIC 3066</span> 
        </div>
      </section>
    </main>
  );
}
