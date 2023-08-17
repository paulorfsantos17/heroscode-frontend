import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  placeholder: string
  title: string
  postionText?: 'center' | undefined
  className?: string
  children: React.ReactNode
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, ISelect> = (
  { placeholder, children, title, postionText, className, ...rest },
  ref,
) => {
  return (
    <div className={`mb-4 flex flex-col gap-1 text-blue ${className}`}>
      <label className="text-base font-medium">{title}</label>
      <select
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className={`w-full rounded-lg border border-teal-400 bg-white px-6 py-1.5  focus:outline-teal-500 ${
          postionText === 'center' ? 'text-center' : ''
        }`}
      >
        <option value="">Selecione</option>
        {children}
      </select>
    </div>
  )
}

export const Select = forwardRef(SelectBase)
