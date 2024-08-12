import React, { useEffect } from 'react';
import { TUser, SortType } from '../../types/ranking/user';

type SortableUserListProps = {
  users: TUser[];
  filter: SortType;
  onSorted: (sortedUsers: TUser[]) => void;
};

const SortableUserList: React.FC<SortableUserListProps> = ({
  users,
  filter,
  onSorted,
}) => {
  useEffect(() => {
    // 필터에 따라 사용자 목록 정렬
    const sortedUsers = [...users].sort((a, b) => {
      if (filter === 'total') {
        return b.totalScore - a.totalScore;
      } else if (filter === 'daily') {
        return b.dailyScore - a.dailyScore;
      } else if (filter === 'weekly') {
        return b.weeklyScore - a.weeklyScore;
      } else if (filter === 'monthly') {
        return b.monthlyScore - a.monthlyScore;
      } else {
        return 0;
      }
    });

    onSorted(sortedUsers);
  }, [users, filter, onSorted]);

  return null;
};

export default SortableUserList;
