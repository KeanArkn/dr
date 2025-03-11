import React from 'react'
import { PhoneIcon } from "@heroicons/react/24/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Youtube } from "lucide-react";


const Communication = () => {
  return (
    <div className="bg-blue-600 py-3 text-white w-full">
      <div className="mx-auto xl:max-w-[1140px] lg:max-w-[992px] md:max-w-[740px] sm:max-w-[600px] max-w-[450px]">
        <div className="flex items-center gap-8 sm:justify-between w-full">
          <div className="flex max-sm:w-full items-center max-sm:justify-between gap-2 lg:gap-6">
            <div className="flex items-center gap-1">
                <PhoneIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                <a href="callto:+90-850-333-0388" className='text-base lg:text-lg'>+90 850 333 0388</a>
            </div>

            <div className="flex items-center gap-1">
                <DevicePhoneMobileIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              <a href="callto:+90-538-280-73-59" className='text-base lg:text-lg'>+90 538 280 73 59</a>
            </div>
          </div>

          <ul className="items-center divide-x divide-white text-base flex-row sm:flex hidden" >
            <li className="px-1 md:px-3 text-base lg:text-lg">Bizi Takip Edin</li>
            <li className="flex items-center px-1 md:px-3">
              <a href="#">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
               </a>
            </li>
            <li className="flex items-center px-1 md:px-3">
              <a href="#">
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </a>
            </li>
            <li className="flex items-center px-1 md:px-3">
              <a href="#">
                <Youtube className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Communication