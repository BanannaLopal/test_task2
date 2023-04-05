import { ChangeEventHandler, useCallback, useState } from 'react';
import CSS from './Calendar.module.scss';
import { TagTypes } from '../../models/Calendar.model';
import { IconButton } from '../IconButton/IconButton';
import { CalendarSvg, LeftArrowSvg } from '../../assets';

export const Calendar = ({ startValue, endValue, onChange }: {
  startValue: Date | undefined;
  endValue: Date | undefined;
  onChange: (value: string, tag: TagTypes) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, [])

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange(event.currentTarget.value, event.currentTarget.dataset.tag as TagTypes);
  }, [onChange])


  return (
    <div className={`${CSS.root} ${isOpen && CSS.rootActive}`}>
      {isOpen && (
        <>
          <input
            value={startValue?.toISOString().slice(0, 10) || ''}
            onChange={handleChange}
            className={CSS.calendarInput}
            type="date"
            data-tag={TagTypes.Start}
          />
          <input
            value={endValue?.toISOString().slice(0, 10) || ''}
            onChange={handleChange}
            className={CSS.calendarInput}
            type="date"
            data-tag={TagTypes.End}
          />
        </>
      )}
      <IconButton onClick={handleClick} icon={isOpen ? <LeftArrowSvg /> : <CalendarSvg />} />
    </div>
  )
}
