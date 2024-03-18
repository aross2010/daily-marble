'use client'
import { getDate } from '@/app/helpers/get-date'
import { FaCheck } from 'react-icons/fa'
const goals = [
  {
    id: 1,
    title: 'Eat 2000 calories',
    description: 'Eat 2000 calories a day to lose weight',
    completed: true,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: 'Workout for 30 minutes',
    description: 'Workout for 30 minutes a day to stay healthy',
    completed: false,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'Read 20 pages',
    description: 'Read 20 pages a day to stay sharp',
    completed: true,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    title: 'Meditate for 10 minutes',
    description: 'Meditate for 10 minutes a day to stay calm',
    completed: false,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    title: 'Get in bed before 10pm',
    description: 'Get in bed before 10pm to get enough sleep',
    completed: false,
    dateCreated: new Date().toLocaleDateString(),
  },
]

export default function Jar({ params }: { params: { id: string } }) {
  const toggleDescription = () => {
    console.log('toggle description')
  }

  const renderedGoals = goals.map((goal) => {
    return (
      <div
        key={goal.id}
        className={`dark:bg-gray-800 bg-gray-100 rounded-lg py-3 flex items-center gap-4 px-4 transition-all ${
          goal.completed ? 'dark:bg-gray-800/75' : ''
        }`}
        onMouseEnter={toggleDescription}
        onMouseLeave={toggleDescription}
      >
        <div
          className={`h-6 w-6 rounded-full border flex items-center justify-center border-gray-400 bg-transparent cursor-pointer ${
            goal.completed ? 'dark:border-gray-600' : ''
          }`}
        >
          {goal.completed && <FaCheck className="text-indigo-500" />}
        </div>
        <h3
          className={`${
            goal.completed
              ? 'line-through dark:text-gray-600 text-gray-400'
              : ''
          }`}
        >
          {goal.title}
        </h3>
      </div>
    )
  })

  return (
    <section className="w-full flex gap-4">
      <div className="w-full flex flex-col">
        <h2 className="text-2xl font-semibold">Health Jar Goals</h2>
        <span className="text-sm font-medium dark:text-gray-300 text-gray-700 mb-6">
          {getDate(new Date())} – 🔥 10 day streak
        </span>

        <div className="flex flex-col gap-3 mb-8">{renderedGoals}</div>
        <button className="w-36 rounded-lg font-medium text-gray-100 text-sm py-1.5 bg-indigo-500 hover:scale-[1.02] active:scale-100 transition-all">
          Add Goal
        </button>
      </div>
      <div className="w-full flex justify-center items-center border">
        Jar here
      </div>
    </section>
  )
}
// can use real date string
