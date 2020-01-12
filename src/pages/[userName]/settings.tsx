import { useRouter } from "next/router";
import ErrorPage from "../_error";

type Props = {
  readonly errorCode: any;
};
const Page = ({ errorCode }: Props) => {
  const { query } = useRouter();
  return errorCode ? (
    <ErrorPage statusCode={errorCode} />
  ) : (
    <>
      <h1>User Settings</h1>
      <p>{JSON.stringify(query)}</p>
    </>
  );
};

export default Page;
