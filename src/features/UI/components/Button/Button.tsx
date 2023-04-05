import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import CSS from './Button.module.scss';

export const Button = ({ text, onChange, ...props }: {
  text: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <>
      <button
        className={CSS.button}
        type="button"
        onChange={onChange}
        {...props}
      >
        {text}
      </button>
    </>
  )
}
