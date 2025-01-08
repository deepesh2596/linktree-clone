import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("linktree")
    const collection = db.collection("links")

    // if the handle is already claimed, you cannot create bitlink 

    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }
    {
        const item2 = {
            "_id": {
                "$oid": "674da52f1079369a9c4ecd87"
            },
            "links": [
                {
                    "link": "http://localhost:3000/generate",
                    "linktext": "ddd"
                }
            ],
            "handle": "dc",
            "pic": "dc.jpg"
        }
    }
    return <div className="flex min-h-screen bg-gradient-to-b from-[#CECECD] via-[#D1E8E2] to-[#F7D9C4] justify-center items-start py-10">
        {item && <div className="photo flex flex-col justify-center items-center gap-4">
            <img className="h-28 w-28" src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}> <div className="py-4 shadow-lg px-2 bg-[#F4F4F5] my-3 min-w-96 flex justify-center">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}