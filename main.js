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

const defaultOptions = {
  chart: {
    toolbar: { show: false },
    selection: { enabled: false },
    zoom: { enabled: false },
    width: "100%",
    height: 150,
    offsetY: 8,
  },

  stroke: { lineCap: "round" },
  dataLabels: { enabled: false },
  legend: { show: false },
  states: {
    hover: {
      filter: { type: "none" },
    },
  },
};
