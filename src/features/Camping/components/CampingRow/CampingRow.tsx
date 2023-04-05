import { CampingUserType, EditCampingUserType } from 'models/CampingUser.model';
import { memo, useCallback } from 'react';
import { Calendar, IconButton, TagTypes } from 'features/UI';
import { CloseSvg } from 'features/UI/assets';
import CSS from './CampingRow.module.scss';

export const CampingRow = memo(({ campingUser, onEdit, onDelete }: {
  campingUser: CampingUserType;
  onEdit: (user: EditCampingUserType) => void;
  onDelete: (id: number) => void;
}) => {
  const handleChangeDate = useCallback((value: string, tag: TagTypes) => {
    // @ts-ignore
    const time = new Date(value);
    const newData: Partial<CampingUserType> = {};
    if (tag === TagTypes.End) {
      newData.endDate = time;
    } else if (tag === TagTypes.Start) {
      newData.startDate = time;
    }
    onEdit({
      id: campingUser.id,
      ...newData,
    })
  }, [onEdit, campingUser.id])

  const handleDelete = useCallback(() => {
    onDelete(campingUser.id as number)
  }, [onDelete, campingUser.id])

  return (
    <div className={CSS.row}>
      <div className={CSS.dateCell}>
        <Calendar endValue={campingUser.endDate} startValue={campingUser.startDate} onChange={handleChangeDate} />
      </div>
      <span className={CSS.nameCell}>{campingUser.name}</span>
      <IconButton onClick={handleDelete} icon={<CloseSvg />} />
    </div>
  )
})
