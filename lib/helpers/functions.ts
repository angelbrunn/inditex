export const changeDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();
  const formatedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year}`;
  return formatedDate;
};

export const millisToTime = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  return formattedTime;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

export const isLocal = () => process.env.NODE_ENV === 'development';

export const createMarkup = (html: any) => {
  return { __html: html };
};
