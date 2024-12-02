import LogoIcon from '@/assets/icon/logo.svg'
import { PowerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from '@/components/common/NavLink'

export default function Navbar() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        className='mb-2 flex h-20 items-end justify-start rounded-md bg-customCoral p-4 md:h-40 md:p-3'
        href='/'
      >
        <div className='flex w-32 flex-row items-center justify-center gap-2 text-xl font-bold text-white md:w-40'>
          <Image src={LogoIcon} alt='logo' />
          <h1>MemoryMap</h1>
        </div>
      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-customGrayLight md:block'></div>
        <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-customGrayLight p-3 text-sm font-semibold text-customGray hover:bg-customCoralLight hover:text-customCoral md:flex-none md:justify-start md:p-2 md:px-3'>
          <PowerIcon className='w-6' />
          <div className='hidden md:block'>Sign Out</div>
        </button>
      </div>
    </div>
  )
}
