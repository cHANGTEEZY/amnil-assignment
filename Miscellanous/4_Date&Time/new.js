const tokyoDate = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Tokyo",
});

console.log("Tokyo time:", tokyoDate);

// Convert to Kathmandu time
const kathmanduTime = new Date(tokyoDate).toLocaleTimeString("en-US", {
  timeZone: "Asia/Kathmandu",
});

console.log("Kathmandu time:", kathmanduTime);
