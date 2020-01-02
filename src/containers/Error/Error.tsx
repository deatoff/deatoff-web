import React from 'react'

export type Props = {
  statusCode: number
}

export const Error = ({ statusCode }: Props) => {
  return (
    <div>
      <span />
      <h1>{statusCode}</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An unexpected error has occurred on client'}
      </p>
      {/* 
        https://nextjs.org/blog/styling-next-with-styled-jsx 
      */}
      <style jsx>{`
        div {
          width: 400px;
          margin: 0 auto;
          text-align: center;
        }
        span {
          display: block;
          margin: 50px auto;
          width: 80px;
          height: 80px;
          border-radius: 10px;
          background: red;
        }
        h1 {
          font-size: 100px;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}