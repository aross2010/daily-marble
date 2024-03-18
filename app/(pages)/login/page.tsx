import React from 'react'
import Link from 'next/link'
import TextField from '@/app/components/ui/text-field'

const textFields = [
  {
    name: 'Username',
    type: 'text',
    placeholder: 'Username',
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
  },
]

export default function Login() {
  const inputs = textFields.map((input, index) => {
    return (
      <TextField
        key={index}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        required={input.required}
      />
    )
  })

  return (
    <section className="flex w-full flex-col justify-center items-center h-full pt-12">
      <h2 className="text-2xl font-semibold">Log in</h2>
      <span className="mb-12 text-sm mt-4 text-gray-400">
        Don't have an account?{' '}
        <Link
          href="/register"
          className="text-indigo-500 font-semibold"
        >
          Register here
        </Link>
      </span>
      <section className="w-full max-w-[450px] px-6 h-[300px] rounded-lg flex flex-col">
        <div className="flex flex-col gap-6">{inputs}</div>
        <button className="w-full h-12 bg-indigo-500 text-gray-50 font-medium text-sm rounded-2xl mt-auto hover:scale-[1.02] active:opacity-90 active:scale-100 transition-all">
          Log in
        </button>
      </section>
    </section>
  )
}
