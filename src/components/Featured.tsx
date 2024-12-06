import Image from "next/image"

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* WRAPPER  */}
            <div className="w-max flex">
                {/* SINGLE ITEM  */}
                <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4">
                {/* IMAGE CONTAINER  */}
                <div className="flex-1 w-full relative">
                    <Image src="/temporary/p1.png" alt="featured image" fill className="object-contain" />
                </div>
                {/* TEXT CONTAINER  */}
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-xl font-bold uppercase">Title</h1>
                    <p>Desc</p>
                    <span>123</span>
                    <button className="bg-red-500 text-white p-2 rounded-md">Add To Cart</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Featured