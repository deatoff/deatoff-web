import React from 'react'
import { Error } from "./Error"

export type Props = {
  statusCode: number
}

export const ErrorContainer = ({ statusCode }: Props) => 
  <Error statusCode={statusCode} />
