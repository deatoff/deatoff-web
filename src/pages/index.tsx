import { Button, InputText } from "../components"

const Page = () => {
  
  const onChange = () => {}

  return (
    <div>
      <Button text="Welcome to Next.js!" />
      <InputText value="Welcome to Next.js!" onChange={onChange} />
    </div>
  )
}

export default Page