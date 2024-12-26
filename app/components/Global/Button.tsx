import React from 'react'

interface Props {
  label?: string
}

const Button = ({ label = 'Click Me!' }: Props) => {
  return <button className="bg-blue-500 p-2 rounded-lg text-white">{label}</button>
}

export default Button
