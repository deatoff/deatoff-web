import { useRouter } from 'next/router'
import ErrorPage from "../_error"

const Page = ({ errorCode }) => {
  if (errorCode) return <ErrorPage statusCode={errorCode} />

  const { query } = useRouter();

  return (
    <>
      <h1>User Settings</h1>
      <p>{JSON.stringify(query)}</p>
    </>
  )
}

export default Page;