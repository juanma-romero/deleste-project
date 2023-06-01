'use client'

import { GoThreeBars } from 'react-icons/go'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { AR, BR } from 'country-flag-icons/react/1x1'


const montserrat = Montserrat_Alternates({ subsets: ['latin'],weight: ['700'] })

const Navbar = () => {  
  const [age, setAge] = useState('')
  
  const handleChange = (event: SelectChangeEvent) => {    
    setAge(event.target.value as string)    
  }
  
  return (
    
      <div className='flex justify-between items-center pt-6 px-6'>      
        <h1 className={montserrat.className}><Link href='/'>Deleste.Shop</Link></h1>
        {/*
        <Box sx={{ minWidth: 80 }} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className='text-white '>Idioma</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              className='text-white'
            >
              <MenuItem value={'/'} >{<Link href='/'><BR className='w-6 h-6'/></Link>}</MenuItem>
              <MenuItem value={'/arg'}>{<Link href='/arg'><AR className='w-6 h-6'/></Link>}</MenuItem>
              
            </Select>
          </FormControl>
        </Box>
        */}
        <GoThreeBars className='cursor-pointer text-5xl rounded-lg py-2 px-3 shadow-md hover:bg-[#517373]'/>
        
      </div>      
    
  )
}

export default Navbar