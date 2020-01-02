import { NextPage } from "next";
import { ErrorProps, ErrorContainer } from "../containers"

type Props  = {
  statusCode: ErrorProps["statusCode"]
}

const Error: NextPage<Props> = ({ statusCode }: Props) => 
  <ErrorContainer statusCode={statusCode} />

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error