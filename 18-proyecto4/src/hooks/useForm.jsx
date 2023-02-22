import React, { useState } from 'react'

export const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj)

  const changed = ({target}) => {
    const {name, value} = target
    setForm({
        ...form,
        [name]: value
    })    
    //console.log(form);
  }

  return {
    form,
    changed
  }
}
