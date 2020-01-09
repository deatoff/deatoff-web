import { renderHook, act } from '@testing-library/react-hooks'
import { useField } from '../useField'

test('should return value when setValue is called', () => {
  const initialValue = "foo"
  const { result } = renderHook(() => useField({ initialValue }))
  
  act(() => {
    result.current.setValue("foo")
  })

  expect(result.current.value).toBe("foo")
})