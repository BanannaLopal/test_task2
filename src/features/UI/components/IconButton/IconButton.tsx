import { ButtonHTMLAttributes, DetailedHTMLProps, memo, ReactNode } from 'react';
import CSS from './IconButton.module.scss';

export const IconButton = memo(({ icon, className, ...props }: {
  icon: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={`${CSS.btn} ${className}`}
      {...props}
    >
      {icon}
    </button>
  )
})
