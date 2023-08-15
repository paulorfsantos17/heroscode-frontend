import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type: string
  title: string
  postionText?: 'center' | undefined
  className?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { placeholder, type, title, postionText, className, ...rest },
  ref,
) => {
  return (
    <div className={`mb-4 flex flex-col gap-1 text-blue ${className}`}>
      <label className="text-base font-medium">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className={`w-full rounded-lg border border-teal-400 bg-white px-6 py-1.5  focus:outline-teal-500 ${
          postionText === 'center' ? 'text-center' : ''
        }`}
      />
    </div>
  )
}

export const Input = forwardRef(InputBase)
