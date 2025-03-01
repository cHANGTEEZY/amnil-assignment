export default function getCurrentDate() {
  const targetDate = new Date(2025, 2, 1);
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}
