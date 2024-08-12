import React, { useState, useEffect } from 'react';
import * as S from '@/styles/ranking/SearchNicknameInputStyle';
import SearchIcon from '@/assets/icons/Search.svg';
import { TUser } from '../../types/ranking/user';

type SearchNicknameInputProps = {
  users: TUser[];
  onSearchResults: (results: TUser[]) => void;
};

const SearchNicknameInput: React.FC<SearchNicknameInputProps> = ({
  users,
  onSearchResults,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // 검색어가 변경될 때마다 필터링된 결과를 업데이트
    const filteredUsers = users.filter(user =>
      user.userNickname.toLowerCase().includes(query.toLowerCase()),
    );
    onSearchResults(filteredUsers);
  }, [query, users, onSearchResults]);

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="닉네임 검색"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <S.Icon src={SearchIcon} alt="search" />
    </S.SearchContainer>
  );
};

export default SearchNicknameInput;
