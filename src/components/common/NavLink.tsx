'use client'

import {
  HomeIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
  { name: 'Register', href: '/register', icon: PencilSquareIcon },
  { name: 'Community', href: '/community', icon: GlobeAltIcon },
  { name: 'MyPage', href: '/mypage', icon: UserCircleIcon },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-customGrayLight p-3 text-sm font-semibold text-customGray hover:bg-customCoralLight hover:text-customCoral md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-customCoralLight text-customCoral': pathname === link.href,
              },
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
