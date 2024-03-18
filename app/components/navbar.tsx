import Link from 'next/link'
import React from 'react'
import logo from '../../logo.png'
import Image from 'next/image'
import ThemeSwitcher from './ui/theme-switch'

const links = [
  {
    label: 'About Us',
    link: '/about',
  },
  {
    label: 'Our Team',
    link: '/team',
  },
]

const authLinks = [
  {
    label: 'Login',
    link: '/login',
  },
  {
    label: 'Register',
    link: '/register',
  },
]

export default function Navbar() {
  const renderedLinks = links.map(({ link, label }, index) => {
    return (
      <Link
        href={link}
        key={index}
      >
        <span className="text-sm font-medium">{label}</span>
      </Link>
    )
  })

  const renderedAuthLinks = authLinks.map(({ link, label }, index) => {
    return (
      <Link
        href={link}
        key={index}
      >
        <span className="text-sm font-medium">{label}</span>
      </Link>
    )
  })

  return (
    <nav className="z-[10] w-full flex justify-center">
      <section className="flex max-w-[1200px] py-4 w-full items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Jar Logo"
              width={50}
              height={50}
            />
          </Link>
          <h1 className="font-bold text-lg ml-6 mr-10">Daily Marble</h1>
          <div className="flex gap-4">{renderedLinks}</div>
        </div>
        <div className="flex gap-4">
          {renderedAuthLinks}
          <ThemeSwitcher />
        </div>
      </section>
    </nav>
  )
}
