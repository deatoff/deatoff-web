import React from 'react'

type User = {
  name: string | string[];
  age: number;
}

export type Props = {
  user: User
}

export const User = ({ user }: Props) => {
  return (
    <div>
      <h1>Success</h1>
      <code>{JSON.stringify(user)}</code>
      <style jsx>{`
        div {
          width: 400px;
          margin: 30px auto;
          text-align: center;
        }
        h1 {
          font-size: 40px;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}