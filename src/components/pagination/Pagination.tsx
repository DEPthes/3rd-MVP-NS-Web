import * as S from '@/styles/pagination/PaginationStyle';
import PrevBtnMini from '@/assets/icons/PrevBtnMini.svg?react';
import { TPagination } from '@/types/pagination';
import { useState } from 'react';

const Pagination = ({
	pageInfo,
	pageNum,
	setPageNum,
}: {
	pageInfo: TPagination;
	pageNum: number;
	setPageNum: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [groupPageNum, setGroupPageNum] = useState(0);

	return (
		<S.Container>
			<PrevBtnMini
				style={{
					cursor: 'pointer',
					visibility:
						pageInfo.totalPages > 5 && groupPageNum > 0 ? 'visible' : 'hidden',
				}}
				onClick={() => {
					if (groupPageNum > 0) {
						setGroupPageNum((prev: number) => Math.max(0, prev - 5));
						setPageNum(groupPageNum - 1);
					}
				}}
			/>
			<S.PageNumWrap>
				{Array.from(
					{ length: Math.min(5, pageInfo.totalPages - groupPageNum) },
					(_, index) => {
						const pageNumber = groupPageNum + index;
						return (
							<S.PageNumText
								key={pageNumber}
								$isOn={pageNum == pageNumber}
								onClick={() => {
									setPageNum(pageNumber);
									window.scroll({ top: 0, behavior: 'smooth' });
								}}
							>
								{pageNumber}
							</S.PageNumText>
						);
					},
				)}
			</S.PageNumWrap>
			<PrevBtnMini
				style={{
					rotate: '180deg',
					cursor: 'pointer',
					visibility:
						pageInfo.totalPages > 5 && groupPageNum + 5 < pageInfo.totalPages
							? 'visible'
							: 'hidden',
				}}
				onClick={() => {
					if (groupPageNum + 5 < pageInfo.totalPages) {
						setGroupPageNum(prev => prev + 5);
						setPageNum(groupPageNum + 5);
					}
				}}
			/>
		</S.Container>
	);
};

export default Pagination;
