import { memo, ReactNode } from 'react';

export const CampingTable = ({ campingRows }: {
  campingRows: ReactNode[];
}) => {
  return (
    <div>
      {campingRows.map((row) => row)}
    </div>
  )
}
