function getWeekDays() {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dayOfWeek = today.getDay();
  if (dayOfWeek === 6) {
    today.setDate(today.getDate() - 1);
    yesterday.setDate(yesterday.getDate() - 1);
  } else if (dayOfWeek === 0) {
    today.setDate(today.getDate() - 2);
    yesterday.setDate(yesterday.getDate() - 2);
  }
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const yyear = yesterday.getFullYear();
  const ymonth = String(yesterday.getMonth() + 1).padStart(2, '0');
  const yday = String(yesterday.getDate()).padStart(2, '0');
  return {
    today: `${year}${month}${day}`,
    yesterday: `${yyear}${ymonth}${yday}`,
  };
}

export default { getWeekDays };
