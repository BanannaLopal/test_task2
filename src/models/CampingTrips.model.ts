import { CampingUserType } from './CampingUser.model';
import { addDays } from 'lib/date';

const CampingDays = 2;
const MinimumNumberOfParticipantsForCampingTrip = 2;

export type CampingTripsType = {
  id: number;
  startDate: Date;
  endDate: Date;
  users: CampingUserType[];
}

export const getIntersection = (campingUsers: CampingUserType[]): CampingTripsType[] => {
  const res: CampingTripsType[] = []

  let id = 0;
  for (const campingUser of campingUsers) {
    if (!campingUser.endDate || !campingUser.startDate) {
      continue
    }
    let difference = campingUser.endDate.getTime() - campingUser.startDate.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));
    let i = 0;
    while (days >= CampingDays) {
      const startDate = addDays(i, campingUser.startDate);
      const endDate = addDays(CampingDays, startDate);
      const campingTripIndex = res.findIndex((trip) => trip.endDate.getTime() === endDate.getTime() && trip.startDate.getTime() === startDate.getTime());
      if (campingTripIndex > -1) {
        res[campingTripIndex].users.push(campingUser);
      } else {
        res.push({
          id: id,
          startDate,
          endDate,
          users: [campingUser]
        })
        id++;
      }
      days--;
      i++;
    }
  }

  return res.filter(({users}) => users.length >= MinimumNumberOfParticipantsForCampingTrip).sort((a, b) => b.users.length - a.users.length);
}
