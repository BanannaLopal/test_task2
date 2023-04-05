import { CampingRow, CampingTable, CampingHeader, CampingFooter } from 'features/Camping';
import { useCallback, useMemo, useState } from 'react';
import { CampingUserType, EditCampingUserType, getId } from 'models/CampingUser.model';
import CSS from './CampingPage.module.scss';

export const CampingPage = () => {
  const [campingUsers, setCampingUsers] = useState<CampingUserType[]>([]);

  const handleAdd = useCallback((user: CampingUserType) => {
    setCampingUsers(users => [...users, {...user, id: getId()}]);
  }, [setCampingUsers])

  const handleEdit = useCallback((newData: EditCampingUserType) => {
    setCampingUsers((users) => {
      const newUsers: CampingUserType[] = structuredClone(users);
      const editableIndex = newUsers.findIndex((u) => u.id === newData.id);
      newUsers[editableIndex] = {
        ...newUsers[editableIndex],
        ...newData,
      };
      return newUsers;
    });
  }, [setCampingUsers])

  const handleDelete = useCallback((id: number) => {
    setCampingUsers((users) => users.filter(user => user.id !== id));
  }, [setCampingUsers])

  const campingRows = useMemo(() => {
    return campingUsers.map(campingUser => <CampingRow key={campingUser.id} onDelete={handleDelete} onEdit={handleEdit} campingUser={campingUser} />)
  }, [campingUsers, handleDelete, handleEdit])

  return (
    <div className={CSS.root}>
      <CampingHeader onAdd={handleAdd} />
      <CampingTable campingRows={campingRows} />
      <CampingFooter campingUsers={campingUsers} />
    </div>
  )
}
