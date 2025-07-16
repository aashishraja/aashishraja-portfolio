'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NavMenu = () => {
  const pathname = usePathname()
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null)
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLUListElement>(null)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  // When hovered, move underline
  const handleMouseEnter = (el: HTMLElement) => {
    setHoveredEl(el)
    const { offsetLeft, offsetWidth } = el
    setUnderlineProps({ left: offsetLeft, width: offsetWidth })
  }

  // When mouse leaves nav, hide underline
  const handleMouseLeave = () => {
    setHoveredEl(null)
  }

  return (
    <div className="flex items-center justify-center h-full">
      <ul
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        className="relative flex gap-x-20 px-6 items-center justify-center h-full font-main"
      >
        {/* Magic underline - only on hover */}
        <AnimatePresence>
          {hoveredEl && (
            <motion.div
              key="magic-line"
              className="absolute bottom-2 h-[2px] bg-secondary"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                left: underlineProps.left,
                width: underlineProps.width,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </AnimatePresence>

        {links.map(({ name, href }) => {
          const isActive = pathname === href

          return (
            <li key={href}>
              <Link
                href={href}
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                className={`relative text-base transition-colors duration-300 ${
                  isActive ? 'text-secondary' : 'text-gray-500 hover:text-secondary'
                }`}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavMenu
