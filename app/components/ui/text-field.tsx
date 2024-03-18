import React from 'react'

type InputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextField({ className, ...rest }: InputProps) {
  return (
    <input
      className="w-full h-12 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 placeholder:text-sm placeholder:font-medium outline-none focus:outline-indigo-400"
      {...rest}
    />
  )
}
