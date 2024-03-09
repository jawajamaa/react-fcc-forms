/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🦝 Todo: CREATE RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({ 
  name,
  label, 
  type, 
  id, 
  placeholder,
  validation,
  multiline,
  className, }) => {
  const { 
    register,
    formState: { errors },
   } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  const input_tailwind =
   "p-5 font-medium roumded-md w-full border border-slate-300 placeholder:opacity-60"

  return (
    <div className= {cn("flex flex-col w-full gap-2", className)}>
      <div className = "flex justify-between">
        <label htmlFor = {id} className = "font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode = "wait" initial = { false }>
          {isInvalid && (
            <InputError
              message = {inputError.error.message}
              key = {inputError.error.message}
              />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id = { id }
          type = { type }
          className = "w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder = { placeholder }
          {...register(`${name}`, validation)}
          ></textarea>
      ) : (
        <input
          id = {id}
          type = {type}
          className = {cn(input_tailwind)}
          placeholder = { placeholder }
          {...register(name, validation)}
        />
      )}
    </div>
    )
  }
