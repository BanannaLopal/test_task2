import { Button, TextInput } from 'features/UI';
import { memo, useCallback, useState } from 'react';
import { CampingUserType } from 'models/CampingUser.model';

export const CampingHeader = memo(({ onAdd }: {
  onAdd: (value: CampingUserType) => void
}) => {
  const [name, setName] = useState<string>('');

  const onChangeName = useCallback((text: string) => {
    setName(text);
  }, [setName])

  const handleAdd = () => {
    if (!name) {
      return;
    }
    onAdd({ name });
    setName('');
  }

  return (
    <div>
      <TextInput onPressEnter={handleAdd} onChange={onChangeName} text={name} />
      <Button onClick={handleAdd} text='Добавить' />
    </div>
  )
})
