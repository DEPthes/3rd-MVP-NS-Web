import React, { useState, useEffect } from 'react';
import SearchIcon from '@/assets/icons/Search.svg';
import * as S from '@/styles/mypost/SearchInputStyle';

type SearchInputProps = {
  onSearchResults: (query: string) => void; // 검색어가 변경될 때 호출되는 함수
  searchQuery: string; // 현재 검색어 상태를 전달받음
};

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchResults,
  searchQuery,
}) => {
  const [query, setQuery] = useState(searchQuery); // 입력 필드의 상태

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearchResults(newQuery); // 입력이 변경될 때 부모 컴포넌트로 새로운 검색어 전달
  };

  useEffect(() => {
    setQuery(searchQuery); // 부모에서 검색어가 변경되면 입력 필드도 업데이트
  }, [searchQuery]);

  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="검색할 키워드를 입력하세요"
        value={query}
        onChange={handleInputChange}
        spellCheck={false}
      />
      <S.Icon src={SearchIcon} alt="search" />
    </S.SearchContainer>
  );
};

export default SearchInput;
