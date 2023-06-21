import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoThumbsup } from 'react-icons/go'
import { VscVerifiedFilled } from "react-icons/vsc";
import millify from 'millify'

import DefaultImage from '../assets/images/house1.avif';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <div className="flex flex-wrap w-420 p-5 pt-0 cursor-pointer">
        <div>
          <Image alt="props" src={coverPhoto ? coverPhoto.url : DefaultImage} width="400" height="260" />
        </div>
        <div className="w-full">
          <div className="flex pt-2 items-center justify-between">
            <div className="flex items-center">
              <div className="pr-3 text-green-400">{isVerified && <VscVerifiedFilled />}</div>
              <div className="font-bold text-lg">AED {price}{rentFrequency && `/${rentFrequency}`}</div>
            </div>
            <div>
            </div>
          </div>
          <div className="flex items-center p-1 justify-between w-250 text-blue-400">
          </div>
          <div className="text-lg"></div>
        </div>
      </div>
    </Link>
  )


}

export default Property