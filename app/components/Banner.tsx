import Link from "next/link"
import Image from "next/image"

const Banner = (
  {
  purpose,
  title1, 
  title2, 
  desc1, 
  desc2, 
  buttonText, 
  linkName,
  imageLoad,
  children
  } : {
  purpose: string
  title1: string, 
  title2: string, 
  desc1: string, 
  desc2: string, 
  buttonText: string, 
  linkName: string,
  imageLoad: any 
  children: React.ReactNode,
  }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center m-10">
        <Image alt="banner" src={imageLoad} className="w-500 h-300" />
        <div className="p-5">
          <p className="text-gray-500 text-sm font-medium">{purpose}</p>
          <h1 className="text-3xl font-bold">{title1}<br />{title2}</h1>
          <p className="text-lg pt-3 pb-3 text-gray-700">{desc1}<br />{desc2}</p>
          <button className="text-xl bg-blue-300 text-white">
            <Link href={linkName}>{buttonText}</Link>
          </button>
        </div>
        {children}
      </div>
    </>
  )
}

export default Banner;
