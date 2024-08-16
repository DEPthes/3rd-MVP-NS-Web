import React, { useState, useEffect } from 'react';
import * as S from '@/styles/ranking/SearchNicknameInputStyle';
import SearchIcon from '@/assets/icons/Search.svg';

type SearchNicknameInputProps = {
  onSearchResults: (nickname: string) => void;
  onClearSearch: () => void;
};

const SearchNicknameInput: React.FC<SearchNicknameInputProps> = ({
  onSearchResults,
  onClearSearch,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        onSearchResults(query); // 닉네임 검색
      } else {
        onClearSearch(); // 검색어가 지우면 원래 리스트 복원
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearchResults, onClearSearch]);

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
