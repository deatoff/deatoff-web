import React from 'react'

type Experience = {
  id: string;
  title: string;
  remixed: boolean;
}
export type Props = {
  loading: boolean;
  experiences: Experience[]
  errors: {}
}

export const Experiences = ({ 
  loading,
  experiences,
  errors
}: Props) => {
  return (
    <>
      { loading ? "Loading..." : undefined }
      <div>
        <p>experiences:</p>
        { experiences ? JSON.stringify(experiences) : undefined }
      </div>
      <div>
        <p>errors:</p>
        { errors ? JSON.stringify(errors) : undefined }
      </div>
      <style jsx>{`
        div {
          width: 400px;
          background: #eee;
          padding: 1em;
          font-family: menlo;
          font-size: 12px;
          margin: 30px auto;
        }
        p {
          font-weight: bold;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}