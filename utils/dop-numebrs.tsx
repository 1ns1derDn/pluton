const deleteDotsFromDate = (date: string) => {
	const regex = /\./g
	return date.replace(regex, "")
}

const calcFistAdditonNumber = (date: string) => {
	const dateString = deleteDotsFromDate(date)
	return dateString.split("").reduce((acc, num) => {
		return (acc += +num)
	}, 0)
}

const calcSumAdditonNumber = (fistAdditonNumber: number): number => {
	if (
		fistAdditonNumber === 10 ||
		fistAdditonNumber === 11 ||
		fistAdditonNumber === 12 ||
		fistAdditonNumber < 10
	) {
		return fistAdditonNumber
	}

	const number = String(fistAdditonNumber)
		.split("")
		.reduce((acc, num) => {
			return (acc += +num)
		}, 0)

	return calcSumAdditonNumber(number)
}

const calcThirdAdditionalNumber = (fistAdditonNumber: number, firstNumberFormDate: number) => {
	return fistAdditonNumber - 2 * firstNumberFormDate
}

const calcDestinyNumber = (fistAdditonNumber: number): number => {
	if (fistAdditonNumber === 11 || (fistAdditonNumber >= 1 && fistAdditonNumber <= 9)) {
		return fistAdditonNumber
	}

	const number = String(fistAdditonNumber)
		.split("")
		.reduce((acc, num) => {
			return (acc += +num)
		}, 0)

	return calcDestinyNumber(number)
}

export const getDopNumbers = (date: string) => {
	const fistAdditonNumber = calcFistAdditonNumber(date)
	const secondAdditonNumber = calcSumAdditonNumber(fistAdditonNumber)
	const thirdAdditionalNumber = calcThirdAdditionalNumber(
		fistAdditonNumber,
		Number(date[0]) ? Number(date[0]) : Number(date[1])
	)
	const fourthAdditionalNumber = calcSumAdditonNumber(thirdAdditionalNumber)

	return [fistAdditonNumber, secondAdditonNumber, thirdAdditionalNumber, fourthAdditionalNumber]
}
