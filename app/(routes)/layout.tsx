import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function LayoutDashboard({children}: {children:React.ReactElement}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden xl:block w-80 h-full xl:fixed'>
            SideBar
        </div>
        <div className='w-full xl:ml-80'>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
              <p className="font-bold">Aviso</p>
              <p>Esta página está actualmente en desarrollo. Algunas funciones pueden no estar disponibles o pueden cambiar en el futuro.</p>
            </div>
            <NavBar/>
            <div className='p-6 bg-[#fafbfc] dark:bg-secondary'>
                {children}
            </div>
        </div>
    </div>
  )
}
