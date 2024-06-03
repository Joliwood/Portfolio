export function dateCalculator(
  dateStartMonth: number,
  dateStartYear: number,
  dateEndMonth: number | string,
  dateEndYear: number | string,
) {
  const dateStart = new Date(dateStartYear, dateStartMonth, 1);
  let dateEnd;

  if (dateEndMonth === 'now' || dateEndYear === 'now') {
    dateEnd = new Date();
  } else {
    dateEnd = new Date(Number(dateEndYear), Number(dateEndMonth), 1);
  }

  const dateDiff = dateEnd.getTime() - dateStart.getTime();
  const nbDays = Math.round(dateDiff / (1000 * 60 * 60 * 24));
  let nbMonths = Math.round(nbDays / 30);
  const nbYears = Math.floor(nbMonths / 12);
  if (nbMonths > 12) {
    nbMonths -= nbYears * 12;
  }

  if (nbMonths === 12) {
    return `${nbYears} an`;
  }

  if (nbYears < 1) {
    return `${nbMonths} mois`;
  } if (dateEndMonth === 'now' || dateEndYear === 'now') {
    const currentDate = new Date();
    const currentDiff = currentDate.getTime() - dateStart.getTime();
    const currentNbDays = Math.round(currentDiff / (1000 * 60 * 60 * 24));
    let currentNbMonths = Math.round(currentNbDays / 30);
    const currentNbYears = Math.floor(currentNbMonths / 12);
    if (currentNbMonths > 12) {
      currentNbMonths -= currentNbYears * 12;
    }
    if (currentNbMonths === 12) {
      return `${currentNbYears} an`;
    }
    return `${currentNbYears} ans ${currentNbMonths} mois`;
  }

  return `${nbYears} ans ${nbMonths} mois`;
}
