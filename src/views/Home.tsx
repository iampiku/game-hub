import DefaultLayout from '@/layouts/Default';

import { Button, Tooltip } from '@nextui-org/react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import GameGrid from '@/components/GameGrid';
import SortGames from '@/components/SortGames';
import ShowError from '@/components/utilComponents/ShowError';

import useGame from '@/hooks/useGames';

import { formatNumber } from '@/utils';

export default function Home() {
	const { isLoading, isError, gameData, setPage, page, error } = useGame(null);

	function handlePagination(move: 'next' | 'prev') {
		if (move === 'next') {
			setPage((prevPage) => prevPage + 1);
		} else {
			setPage((prevPage) => {
				if (prevPage === 1) return prevPage;
				else return prevPage - 1;
			});
		}
	}

	const showError = (isError || !gameData.games.length) && !isLoading;

	const totalGames = gameData.totalGames ?? 0;
	const totalGameCountInLong = formatNumber({
		value: totalGames,
		notation: 'standard',
		compactDisplay: 'long',
	});
	const totalGameCountInSort = formatNumber({
		value: totalGames,
	});

	return (
		<DefaultLayout>
			{showError ? (
				<div className='min-h-screen my-auto'>
					<ShowError errorCode={404} />
					<p>{JSON.stringify(error?.message)}</p>
				</div>
			) : (
				<>
					<div id='top-container'>
						<p className='font-semibold text-6xl pb-4 pt-2'>Top Rated Games</p>

						<p>
							Total no. of games found:{' '}
							<Tooltip
								showArrow
								placement='right-end'
								content={totalGameCountInLong}>
								<strong>
									{isLoading ? 'Loading...' : totalGameCountInSort}
								</strong>
							</Tooltip>
						</p>

						<div className='flex justify-between items-center py-4'>
							<SortGames />

							<div className='flex justify-end gap-4'>
								<Button
									variant='flat'
									color='primary'
									isLoading={isLoading}
									isDisabled={page === 1}
									onClick={() => handlePagination('prev')}
									startContent={<FaArrowAltCircleLeft />}>
									Previous
								</Button>
								<Button
									variant='flat'
									color='primary'
									isLoading={isLoading}
									isDisabled={gameData.totalGames === page}
									onClick={() => handlePagination('next')}
									endContent={<FaArrowAltCircleRight />}>
									Next
								</Button>
							</div>
						</div>
					</div>

					<GameGrid games={gameData.games} loading={isLoading} />
				</>
			)}
		</DefaultLayout>
	);
}
