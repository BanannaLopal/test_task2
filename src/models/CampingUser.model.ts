export type CampingUserType = {
  id?: number;
  name: string;
  startDate?: Date;
  endDate?: Date;
}

export type EditCampingUserType = Partial<CampingUserType> & Pick<CampingUserType, 'id'>;

let id = 0;

export const getId = (): number => ++id;
