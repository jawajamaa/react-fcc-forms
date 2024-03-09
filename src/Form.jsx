/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  const name_validation = {
    name: "name",
    label: "name",
    type: "text",
    id: "name",
    placeholder: "write your name...",
    validation: {
      required: {
        value: true,
        message:"30 characters maximum",
      },
    } 
  }

  const password_validation = {
    name: "password",
    label: "password",
    type: "password",
    id: "password",
    placeholder: "type password...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 6,
        message: "min 6 characters",
      },
    },
  }

  return (
    <FormProvider {...methods}>
        <form
          onSubmit = { e => e.preventDefault()}
          noValidate
          autoComplete = "off"
          className = "container"
        >
          <div className = "grid gap-5 md:grid-cols-2">
            <Input { ...name_validation }/>  
            <Input { ...password_validation }/>
          </div>
          <div className="mt-5">
            <button
              onClick = {onSubmit}
              className = " flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
            >
              <GrMail />
              Submit Form
            </button>        
          </div>
    </  form>
    </FormProvider>
  )
}
