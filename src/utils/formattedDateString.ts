export function formattedDateString(dateParam: Date) {
  const date = new Date(dateParam);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // const hour = date.getHours();
  // const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}`;
}