const colorPrimary = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-primary");
trim();

const colorDefault = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-default");
trim();

const colorLabel = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-label"
);
trim();

const fontFamily = getComputedStyle(document.documentElement).getPropertyValue(
  "--font-family"
);
trim();

const defaultOptions = {};
