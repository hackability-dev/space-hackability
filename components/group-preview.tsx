import { GroupPreviewFragment as Group } from '../src/generated/graphql';
import { FC } from 'react';

export const GroupPreview: FC<{ group: Group }> = ({ group }) => {
  return (
    <div className="text-center rounded-xl shadow-lg border-gray-100 border-solid border-2 m-2 max-w-md">
      <h2 className="py-4 text-lg font-bold">{group.name}</h2>
      <img src={group.image || 'https://via.placeholder.com/800x500'} alt={group.name} />
      <p className="py-4 px-2 text-left">{group.description}</p>
    </div>
  );
};
