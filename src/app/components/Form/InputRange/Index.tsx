import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

interface IInputRange extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  className?: string
}

const InputRangeBase: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputRange
> = ({ title, className, ...rest }, ref) => {
  return (
    <div className={`mb-4 flex flex-col gap-1 text-blue ${className}`}>
      <label className="text-base font-medium">{title}</label>
      <input
        type="range"
        min={0}
        max={100}
        ref={ref}
        {...rest}
        className={` w-full rounded-lg border border-teal-400 bg-white px-6  py-1.5 
        focus:outline-teal-500`}
      />
    </div>
  )
}

export const InputRange = forwardRef(InputRangeBase)
