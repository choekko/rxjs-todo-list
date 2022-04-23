
interface GetDateOptions {
  withHyphen?: boolean;
}
export const getDate = (type: 'ymd' | 'ymdt', options: GetDateOptions = { withHyphen: true }): string => {
  const newDate = new Date();
  const monthData = newDate.getMonth() + 1;
  const dateData = newDate.getDate();

  const year = newDate.getFullYear().toString();
  const month = monthData < 10 ? '0' + monthData.toString() : monthData.toString();
  const date = dateData < 10 ? '0' + dateData.toString() : dateData.toString();

  const tokenList = [year, month, date];
  const separator = options.withHyphen ? '-' : ' ';

  if (type === 'ymdt') {
    return [...tokenList, newDate.toTimeString().split(" ")[0]].join(separator)
  }
  return tokenList.join(separator);
}