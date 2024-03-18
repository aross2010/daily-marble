'use client'
import React, { useEffect } from 'react'
import { useTheme } from '@/app/context/theme-context'
import { motion } from 'framer-motion'
import { BsSun, BsMoon } from 'react-icons/bs'
import { Fragment } from 'react'

const themes = [
  {
    value: 'light',
    icon: <BsSun />,
  },
  {
    value: 'dark',
    icon: <BsMoon />,
  },
]

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  const renderedThemeSwitcher = themes.map(({ value, icon }) => {
    return (
      <Fragment key={value}>
        <label
          htmlFor={value}
          className={`relative z-10 cursor-pointer rounded-full px-3 text-center py-1.5 transition-all ${
            theme === value ? 'text-gray-950 bg-transparent' : ''
          }`}
        >
          {icon}
          {theme === value && (
            <motion.span
              className="bg-indigo-500 rounded-full absolute inset-0 -z-10"
              layoutId="theme"
              transition={{
                type: 'spring',
                stifness: 900,
              }}
            />
          )}
        </label>
        <input
          type="radio"
          name="theme"
          id={value}
          value={value}
          className="hidden"
          onChange={toggleTheme}
        />
      </Fragment>
    )
  })

  return (
    <div className="rounded-full bg-gray-200 dark:bg-gray-800  overflow-x-hidden flex items-center">
      {renderedThemeSwitcher}
    </div>
  )
}
