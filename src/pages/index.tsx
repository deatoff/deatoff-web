import { HomePage } from "../components"

const Page = () => {
  
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <HomePage onClick={onClick} />
  )
}

export default Page