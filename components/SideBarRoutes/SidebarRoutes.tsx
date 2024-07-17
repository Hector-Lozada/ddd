import { Separator } from '@/components/ui/separator'
import { SiderbanItem } from './SidebarItem/SiderbanItem'
import {dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar} from './SidebarRoutes.data'

export default function SidebarRoutes() {
  return (
    <div className='flex flex-col justify-between'>
        <div>
            <div className='p-2 md:p-6'>
                <p>GENERAL</p>
                {dataGeneralSidebar.map((item) => (
                    <SiderbanItem key={item.label} item={item}/>
                ))}
            </div>
            <Separator/>
            <div className='p-2 md:p-6'>
                <p>TOOLS</p>
                {dataToolsSidebar.map((item)=>(
                    <SiderbanItem key={item.label} item={item}/>
                ))}
            </div>
            <Separator/>
            <div className='p-2 md:p-6'>
                <p>SUPPORT</p>
                {dataSupportSidebar.map((item)=>(
                    <SiderbanItem key={item.label} item={item}/>
                ))}
            </div>
            <Separator/>
        </div>
        <div>
            <footer className='mt-3 p-3 text-center'>
                2024. All rights reserved
            </footer>
        </div>
    </div>
  )
}
