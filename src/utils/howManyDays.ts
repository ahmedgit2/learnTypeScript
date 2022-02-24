import I18n from 'react-native-i18n';

export const howManyDays = (createDay: string) => {
  const createdAt = new Date(createDay);
  const Today = Date.now();
  const Difference_In_Days = Math.floor(
    (Today - createdAt) / (1000 * 60 * 60 * 24),
  );
  return I18n.t('BidCardHowManyDays', {days: Difference_In_Days});
};
