export const truncate = text => {
  return text.length > 10 ? text.substring(0, 30) + '...' : text;
};
