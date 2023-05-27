'use client'

import Image from 'next/image'

const Linkes = () => {
  return (
    <div className='flex justify-around'>
        <Image src='/logoDeleste.png' alt='sal' width={80} height={100}/>
        <p>donde?</p>
        <button>Ir</button>
    </div>
  )
}

export default Linkes