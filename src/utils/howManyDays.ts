export const howManyDays = createDay => {
  const createdAt = new Date(createDay);
  const Today = Date.now();
  Difference_In_Days = Math.floor((Today - createdAt) / (1000 * 60 * 60 * 24));

  return `منذ ${Difference_In_Days} يوم`;
};
