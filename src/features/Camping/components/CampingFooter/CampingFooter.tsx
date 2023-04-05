import { memo, useEffect, useState } from 'react';
import { CampingTripsType, getIntersection } from 'models/CampingTrips.model';
import { CampingUserType } from 'models/CampingUser.model';
import { GlobeSvg } from 'features/UI/assets';
import CSS from './CampingFooter.module.scss';

export const CampingFooter = memo(({ campingUsers }: {
  campingUsers: CampingUserType[];
}) => {
  const [campingTrips, setCampingTrips] = useState<CampingTripsType[]>([]);

  useEffect(() => {
    setCampingTrips(getIntersection(campingUsers));
  }, [campingUsers])

  return (
    <>
      {campingTrips.map((t) => (
        <div className={CSS.row} key={t.id}>
          <GlobeSvg />
          {`${t.startDate.toLocaleDateString()} - ${t.endDate.toLocaleDateString()} идут ${t.users.map(({name}) => name).join(', ')}`}
        </div>
      ))}
      {!campingTrips.length && 'Нет совпадений'}
    </>
  )
})
