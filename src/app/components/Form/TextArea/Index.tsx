import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

interface IInput extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string
  title: string
  className?: string
}

const TextAreaBasic: ForwardRefRenderFunction<HTMLTextAreaElement, IInput> = (
  { placeholder, title, className, ...rest },
  ref,
) => {
  return (
    <div className={`mb-4 flex flex-col gap-1 text-blue ${className}`}>
      <label className="text-base font-medium">{title}</label>
      <textarea
        cols={5}
        rows={5}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className={`w-full rounded-lg border border-teal-400 bg-white px-6 py-1.5  focus:outline-teal-500`}
      />
    </div>
  )
}

export const TextArea = forwardRef(TextAreaBasic)
