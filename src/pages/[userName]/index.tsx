import ErrorPage from "../_error"
import { UserContainer } from "../../containers"

const Page = ({ errorCode }) => {
  if (errorCode) return <ErrorPage statusCode={errorCode} />
  return <UserContainer />
}

// https://github.com/zeit/next.js/#reusing-the-built-in-error-page
Page.getInitialProps = ({ query }) => {
  const userExists = ["ilkka-halso", "utamaro", "katarzyna-kozyra"]
  const res = {
    statusCode: userExists.find(
      userName => userName === query?.userName
    ) ? 200 : 400
  }
  const errorCode = res.statusCode > 200 ? res.statusCode : false
  return { errorCode }
}

export default Page