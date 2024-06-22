import React, {Fragment, useEffect, useState} from "react";
import {BoardNumberByLetter, Colors, FigureData, Figures} from "../../types";
import styles from "./Figure.module.scss";
import classNames from "classnames";

interface FigureProps {
	figure: FigureData;
	figureClicked: (figure: FigureData) => void;
	isSelected?: boolean
	isEatable?: boolean;
}

const Figure: React.FC<FigureProps> = (props: FigureProps) => {
	const figureColors = {
		dark: '#34364C',
		light: '#F4F7FA',
	};

	const position = {
		left: (props.figure.x - 1) * 12.5 + '%',
		bottom: (props.figure.y - 1) * 12.5 + '%',
	}

	const isBlack = props.figure.color === Colors.BLACK;

	const getBishop = (): JSX.Element => {
		return <Fragment>
			<path d="M26.314 16.8839C25.9121 15.7797 25.6923 14.5878 25.6923 13.3462C25.6923 7.63212 30.3244 3 36.0385 3C41.7525 3 46.3846 7.63212 46.3846 13.3462C46.3846 15.0199 45.9846 16.6065 45.2755 18.0095C46.2959 18.0801 47.2874 18.5398 48.0103 19.366C51.9379 23.8547 55.375 30.2548 55.375 37.6731C55.375 42.9766 53.5491 46.9066 51.0819 49.7383L55.7679 50.5601C57.6813 50.8957 59.0769 52.5574 59.0769 54.5V62C59.0769 63.0609 58.6555 64.0783 57.9053 64.8284C57.1552 65.5786 56.1378 66 55.0769 66L17 66C14.7909 66 13 64.2091 13 62V54.5C13 52.5597 14.3925 50.8992 16.3032 50.5612L20.5303 49.8134C18.0294 46.9764 16.1731 43.0244 16.1731 37.6731C16.1731 31.8853 18.416 26.8449 21.0466 22.9821C22.7001 20.5541 24.5721 18.4927 26.314 16.8839Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path d="M38 37.1442H34C34 29.7994 36.2277 22.4669 41.1561 17.0997C41.9284 16.0485 42.3846 14.7506 42.3846 13.3462C42.3846 9.84126 39.5434 7 36.0385 7C32.5336 7 29.6923 9.84126 29.6923 13.3462C29.6923 15.0754 30.384 16.6431 31.5056 17.7877C27.5414 20.6138 20.1731 28.1889 20.1731 37.6731C20.1731 47.2443 27.6772 51.1192 31.6139 51.9147L17 54.5V62L55.0769 62V54.5L40.1165 51.8762C44.0977 50.9999 51.375 47.0985 51.375 37.6731C51.375 31.5015 48.5 26 45 22C41.1561 25 38 32 38 37.1442Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
		</Fragment>
	}

	const getKing = (): JSX.Element => {
		return <Fragment>
			<path fillRule="evenodd" clipRule="evenodd" d="M30.0019 3.87506C30.0694 1.71562 31.8395 0 34 0H40C42.1605 0 43.9306 1.71562 43.998 3.87506L44.0332 5H46C48.2091 5 50 6.79086 50 9V11.4261C54.3602 10.4394 59.0663 11.0984 63.0607 14.4271C71.3589 21.3423 70.5954 35.8381 60.7472 43.7669C58.3706 45.6803 56.5035 47.2665 55.2178 48.901C54.9245 49.2739 54.6732 49.6347 54.4617 49.9878L58.5156 50.5361C60.4995 50.8044 61.9795 52.4981 61.9795 54.5V62C61.9795 64.2091 60.1886 66 57.9795 66H16.0205C13.8114 66 12.0205 64.2091 12.0205 62V54.5C12.0205 52.4981 13.5005 50.8044 15.4844 50.5361L19.5383 49.9878C19.3268 49.6347 19.0755 49.2739 18.7822 48.901C17.4965 47.2665 15.6294 45.6803 13.2528 43.7669C3.40462 35.8381 2.64109 21.3423 10.9393 14.4271C14.9337 11.0984 19.6398 10.4394 24 11.4261V9C24 6.79086 25.7909 5 28 5H29.9668L30.0019 3.87506Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path fillRule="evenodd" clipRule="evenodd" d="M34 4H40L40.1562 9H46V15H40.3437L40.6185 21.793C40.7282 21.6638 40.8411 21.5372 40.9574 21.4135C46.4206 15.6071 54.5207 12.5172 60.5 17.5C66.5 22.5 66.5 34 58.2387 40.6512C53.559 44.4188 49.3673 48.0509 49.5739 53.3632L57.9795 54.5V62H16.0205V54.5L24.4261 53.3632C24.6327 48.0509 20.441 44.4188 15.7613 40.6512C7.5 34 7.5 22.5 13.5 17.5C19.4793 12.5172 27.5794 15.6071 33.0426 21.4135C33.1589 21.5372 33.2718 21.6638 33.3815 21.793L33.6562 15H28V9H33.8437L34 4ZM28.348 26.9731C32.0147 32.9791 32.5 40 32.5 43.0532C30.6621 43.0565 23.7338 40.0085 20.0656 35.0046C17.4248 31.4022 16.7362 26.0575 19 23.9825C21.2638 21.9075 26.0563 23.2194 28.348 26.9731ZM45.652 26.9731C41.9853 32.9791 41.5 40 41.5 43.0532C43.3379 43.0565 50.2662 40.0085 53.9344 35.0046C56.5752 31.4022 57.2638 26.0575 55 23.9825C52.7362 21.9075 47.9436 23.2194 45.652 26.9731Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
		</Fragment>
	}

	const getKnight = (): JSX.Element => {
		return <Fragment>
			<path d="M29.6899 0.506964C31.0065 0.358909 32.3111 0.872458 33.1735 1.87833L41.3344 11.3968C50.7064 13.7128 56.1365 20.7698 59.1398 29.5796C62.2345 38.6575 63 50.182 63 62C63 64.2091 61.2091 66 59 66H21.7049C19.5814 66 17.8279 64.3406 17.711 62.2202C17.6066 60.3281 18.042 57.0449 19.3686 53.6914L19.393 53.63C15.6257 55.6522 11.4448 55.1678 8.34113 52.958C4.56927 50.2725 2.47202 45.0154 4.86816 39.8238C6.59604 36.08 8.45832 34.0976 9.86712 32.5982C11.1831 31.1977 11.7315 30.5817 12.1194 29.0299C14.4717 19.6209 19.3109 14.2007 24.5079 11.7271C24.4327 10.6552 24.4938 9.62248 24.6253 8.68489C24.9526 6.35108 25.7673 4.19438 26.5978 2.61775C27.2153 1.44546 28.3732 0.655018 29.6899 0.506964Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path fillRule="evenodd" clipRule="evenodd" d="M39.1707 15.0185L30.1368 4.48187C28.8291 6.96447 27.5614 11.3461 29.3841 14.5091C28.4994 14.5879 27.6539 14.7375 27 15C22.8279 16.6743 18.25 21 16 30C15.3485 32.606 14.1759 33.854 12.7822 35.3372C11.4676 36.7364 9.95622 38.3448 8.5 41.5C5.5 48 13.5963 54.5 19.5 48.5963C22.8191 45.2772 25.7204 43.9069 28.1562 42.7566C31.662 41.1008 34.2037 39.9004 35.6393 34C36.3224 36.7523 36.0492 43.2477 29.4918 47.211C22.9344 51.1743 21.5683 59.5229 21.7049 61.9999H59C59 38.4832 55.8865 18.1648 39.1707 15.0185Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
			<circle cx="28" cy="27" r="3" fill={isBlack ? figureColors.light : figureColors.dark}/>
		</Fragment>
	}

	const getPawn = (): JSX.Element => {
		return <Fragment>
			<path d="M23.1075 41.127C22.6303 41.7785 22.0608 42.4569 21.3971 43.1548C19.0545 45.6178 16.1816 47.6443 14.3274 48.7038L14.0154 48.8821C12.7691 49.5942 12 50.9196 12 52.355V62C12 64.2091 13.7909 66 16 66H55C57.2091 66 59 64.2091 59 62V52.355C59 50.9196 58.2309 49.5943 56.9846 48.8821L56.6727 48.7038C54.8185 47.6443 51.9455 45.6178 49.6029 43.1548C48.9392 42.4569 48.3697 41.7785 47.8925 41.127C49.648 40.7041 50.9524 39.1234 50.9524 37.2381V30.7269C50.9524 29.4272 50.3209 28.2085 49.2591 27.459L47.5602 26.2598C48.5405 24.3551 49.0952 22.1938 49.0952 19.9048C49.0952 12.2254 42.8699 6 35.1905 6C27.5111 6 21.2857 12.2254 21.2857 19.9048C21.2857 22.3225 21.9044 24.5972 22.9895 26.5776L21.7409 27.459C20.6791 28.2085 20.0476 29.4272 20.0476 30.7269V37.2381C20.0476 39.1234 21.352 40.7041 23.1075 41.127Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path d="M45.0952 19.9048C45.0952 22.7774 43.8723 25.3645 41.9187 27.1736L46.9524 30.7269V37.2381H42.0246C42.2622 40.2562 44.1987 43.2768 46.7045 45.9115C49.3638 48.7075 52.5633 50.9626 54.6881 52.1768L55 52.355V62H16V52.355L16.3119 52.1768C18.4367 50.9626 21.6362 48.7075 24.2955 45.9115C26.8013 43.2768 28.7378 40.2562 28.9754 37.2381H24.0476V30.7269L28.7357 27.4176C26.6234 25.6012 25.2857 22.9092 25.2857 19.9048C25.2857 14.4345 29.7202 10 35.1905 10C40.6607 10 45.0952 14.4345 45.0952 19.9048Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
		</Fragment>
	}

	const getQueen = (): JSX.Element => {
		return <Fragment>
			<path d="M18 10C18 10.9873 18.1588 11.9373 18.4523 12.8258L16.4779 13.752C14.841 12.0553 12.5438 11 10 11C5.02944 11 1 15.0294 1 20C1 24.4308 4.2018 28.1138 8.41791 28.8614L13.16 45.12C13.259 45.4594 13.4025 45.7842 13.5869 46.0858L16.32 50.5582L16.3032 50.5612C14.3925 50.8992 13 52.5597 13 54.5V62C13 64.2091 14.7909 66 17 66L55.0769 66C56.1378 66 57.1552 65.5786 57.9053 64.8284C58.6555 64.0783 59.0769 63.0609 59.0769 62V54.5C59.0769 52.5574 57.6813 50.8957 55.7679 50.5601L55.6875 50.546L58.4131 46.0858C58.5975 45.7842 58.741 45.4594 58.84 45.12L63.5821 28.8614C67.7982 28.1138 71 24.4308 71 20C71 15.0294 66.9706 11 62 11C59.453 11 57.1532 12.058 55.5159 13.7584L53.545 12.8339C53.8402 11.9431 54 10.9903 54 10C54 5.02944 49.9706 1 45 1C40.0294 1 36 5.02944 36 10C36 5.02944 31.9706 1 27 1C22.0294 1 18 5.02944 18 10Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path d="M28.7948 14.6682C30.6696 13.947 32 12.1288 32 10C32 7.23858 29.7614 5 27 5C24.2386 5 22 7.23858 22 10C22 12.5519 23.9117 14.6572 26.3811 14.9621L24.1513 33L13.4022 23.6641C14.3851 22.751 15 21.4473 15 20C15 17.2386 12.7614 15 10 15C7.23858 15 5 17.2386 5 20C5 22.7614 7.23858 25 10 25C10.4861 25 10.956 24.9306 11.4004 24.8013L17 44L22.7906 53.4756L17 54.5V62L55.0769 62V54.5L49.2119 53.4714L55 44L60.5996 24.8013C61.044 24.9306 61.5139 25 62 25C64.7614 25 67 22.7614 67 20C67 17.2386 64.7614 15 62 15C59.2386 15 57 17.2386 57 20C57 21.4473 57.6149 22.751 58.5978 23.6641L47.8487 33L45.6189 14.9621C48.0883 14.6572 50 12.5519 50 10C50 7.23858 47.7614 5 45 5C42.2386 5 40 7.23858 40 10C40 12.1288 41.3304 13.947 43.2052 14.6682L36 31L28.7948 14.6682Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
		</Fragment>
	}

	const getRook = (): JSX.Element => {
		return <Fragment>
			<path d="M26 5C26.7286 5 27.4117 5.19479 28 5.53513C28.5883 5.19479 29.2714 5 30 5H41C41.7286 5 42.4117 5.19479 43 5.53513C43.5884 5.19479 44.2714 5 45 5H55C57.2091 5 59 6.79086 59 9V18C59 19.259 58.4072 20.4446 57.4 21.2L51.2279 25.8291L52.9755 41.5583C53.4382 45.7226 55.3765 47.8353 58.2 51.6C58.7193 52.2924 59 53.1345 59 54V62C59 64.2091 57.2091 66 55 66H16C13.7909 66 12 64.2091 12 62V54C12 53.1345 12.2807 52.2924 12.8 51.6C15.6235 47.8353 17.5618 45.7226 18.0245 41.5583L19.7722 25.8291L13.6 21.2C12.5928 20.4446 12 19.259 12 18V9C12 6.79086 13.7909 5 16 5H26Z" fill={isBlack ? figureColors.light : figureColors.dark}/>
			<path d="M16 9H26V15H30V9H41V15H45V9H55V18L47 24L49 42H22L24 24L16 18V9Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
			<path d="M22 46H49L55 54V62H16V54L22 46Z" fill={isBlack ? figureColors.dark : figureColors.light}/>
		</Fragment>
	}

	const getFigure = (): JSX.Element => {
		switch (props.figure.name) {
			case Figures.BISHOP:
				return getBishop();
			case Figures.KING:
				return getKing();
			case Figures.KNIGHT:
				return getKnight();
			case Figures.PAWN:
				return getPawn();
			case Figures.QUEEN:
				return getQueen();
			case Figures.ROOK:
				return getRook();
		}
	}

	return <div
		onClick={() => props.figureClicked(props.figure)} className={classNames(styles.figure, {
			[styles.figureEatable]: props.isEatable,
		})}
		style={{'left': position.left, bottom: position.bottom}} id={props.figure.id}
	>
		<svg width="100%" height="100%" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
			{getFigure()}
		</svg>
	</div>
}

export default Figure;