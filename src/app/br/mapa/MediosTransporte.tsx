import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { BsAirplane, BsBusFront, BsCarFront } from 'react-icons/bs'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MediosTransporte() {
  let [categories] = useState({
    Avion: [
      {
        id: 1,
        title: 'Viajes en avión',
        linki: 'https://www.kayak.com.br/',
        precio_promedio: 155,
        
        icon: <BsAirplane />
      }
    ],
    Omnibus: [
      {
        id: 2,
        title: 'Viajes en Omnibus',
        linki: 'https://www.buson.com.br/',
        precio_promedio: 109,
        icon: <BsBusFront />
      }
    ],
    Automobil: [
      {
        id: 3,
        title: 'Viajes en Automobil',
        linki: 'rutas',
        precio_promedio: 89,
        icon: <BsCarFront />
      }
    ],
  })

  return (
    <div className=" px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex w-96 space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >              
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  > 
                    
                    <h3 className="text-sm font-medium leading-5 text-blue-500">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.linki}</li>
                      <li>&middot;</li>
                      <li>Reais ${post.precio_promedio} </li>
                      <li>&middot;</li>
                      <li>{post.icon} </li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


