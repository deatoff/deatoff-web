import { useForm, useQuery } from "../../hooks"
import { createExperience } from "./query"

const FooView = ({ 
  onSubmit, 
  onChangeInput, 
  onChangeCheckbox,
  values 
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Title"
          value={values.title}
          onChange={onChangeInput} 
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Author" 
          value={values.author}
          onChange={onChangeInput}
        />
        <input 
          type="checkbox" 
          name="remixed"
          defaultChecked={values.done}
          onChange={onChangeCheckbox}
        />
        <input type="submit" value="Submit" />
        <style jsx>{`form{padding:1em;}input{width:100%;display: block}`}</style>
      </form>
    </div>
  )
}

const initialValues = {
  title: "foo",
  author: "bar",
  password: "zxy",
  done: true
}
export const Foo = () => {
  const {
    values,
    handleSubmit,
    handleChangeInput,
    handleChangeCheckBox,
  } = useForm({ 
    initialValues,
    query: createExperience
  })

  const { data } = useQuery()

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(values)}</pre><br/>
      <FooView 
        values={values}
        onSubmit={handleSubmit} 
        onChangeInput={handleChangeInput}
        onChangeCheckbox={handleChangeCheckBox}
      />
      <style jsx>{`pre{font-family:menlo;font-size:11px;color:cyan;background:#333;padding:1em;margin-bottom:0.5em;}`}</style>
    </>
  )
}