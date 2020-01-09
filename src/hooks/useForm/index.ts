import { useReducer } from "react"
import { useMutation } from "../../hooks"

export const useForm = ({
  initialValues,
  query
}) => {
  const initialState = initialValues
  const [values, dispatch] = useReducer(reducer, initialState)

  const { load } = useMutation({
    variables: { ...values },
    query: query()
  })
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    load()
  }

  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => 
    dispatch({ 
      type: e.target.name, 
      payload: e.target.checked
    })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => 
    dispatch({ 
      type: e.target.name, 
      payload: e.target.value
    })

  return {
    values,
    handleSubmit, 
    handleChangeInput, 
    handleChangeCheckBox, 
  }
}

const reducer = (state, action) => {
  if (action.type) {
    return {
      ...state,
      [action.type]: action.payload
    }
  }
  return state
}