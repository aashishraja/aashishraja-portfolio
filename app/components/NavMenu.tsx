'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMenu = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className='flex items-center justify-center gap-x-5 bg-amber-900 h-full'>
      <ul className='bg-amber-400 flex gap-x-48 px-6 items-center justify-center h-full'>
        {links.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-all px-2 py-1 ${
                pathname === href ? 'text-white underline' : 'text-black'
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
