import React, {useState} from "react";

export const useFormInput = (initialState: string = '') => {
  const [value, setValue] = useState(initialState)
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return {
    value,
    onChange: handleChange
  }
}