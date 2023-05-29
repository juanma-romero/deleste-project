'use client'
import { AR, BR } from 'country-flag-icons/react/3x2';
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {BsChevronContract,BsCheckLg} from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat_Alternates({ subsets: ['latin'],weight: ['700'] })

const idioma = [
  { name: 'Idioma Brasilero' },
  { name: 'Idioma Argentina' }  
]

const Navbar = () => {
  const [selected, setSelected] = useState(idioma[0])
  return (
    <div className=''>
    <div className='flex justify-between items-center pt-6 px-6'>
      
      <h1 className={montserrat.className}><Link href='/'>Deleste.Shop</Link></h1>
      <GoThreeBars className='cursor-pointer text-4xl rounded-lg py-2 px-3 shadow-md hover:bg-[#517373]'/>
    </div> 
    <Listbox value={selected} onChange={setSelected}> 
      <div className="mt-6 ml-[30%] sm:ml-[45%]">
        <Listbox.Button className="relative  w-[10rem] cursor-default rounded-lg bg-[#203359] hover:bg-[#517373] py-2 pr-5 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronContract
                className="h-5 w-5 text-[#fff]"
                aria-hidden="true"
              />
            </span>
        </Listbox.Button>
        <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-10rem overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {idioma.map((idioma, idiomaIdx) => (
                <Listbox.Option
                  key={idiomaIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={idioma}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {idioma.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsCheckLg className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
    
    </div>
  )
}

export default Navbar