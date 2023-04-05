import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';
import CSS from './TextInput.module.scss';

export const TextInput = ({ text, onChange, onPressEnter }: {
  text: string;
  onChange: (search: string) => void;
  onPressEnter: () => void;
}) => {

  const handleChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange(event.target.value);
  }, [onChange])

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
    if (event.key === 'Enter') {
      onPressEnter();
    }
  }, [onPressEnter])

  return (
    <input className={CSS.input} onKeyDown={handleKeyDown} value={text} onChange={handleChangeInput} type="text"/>
  )
}
