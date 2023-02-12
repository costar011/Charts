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

var barOptions = {
  ...defaultOptions,
  chart: {
    ...defaultOptions.chart,
    type: "bar",
  },
  tooltip: {
    enabled: true,
    fillerSeriesColor: false,
    style: { fontFamily: fontFamily },
    y: {
      formatter: (value) => {
        return `${value}`;
      },
    },
  },

  series: [
    {
      name: "This Year",
      data: [23, 55, 41, 37, 22, 43],
    },
    {
      name: "Last Year",
      data: [34, 32, 33, 52, 13, 54],
    },
  ],
};

colors: [colorPrimary, colorDefault];
stroke: {
  show: false;
}

grid: {
  borderColor: "rgba(255, 255, 255, 0.05)";

  padding: {
    left: 0;
    right: 0;
    top: -16;
    bottom: -8;
  }
}

plotOptions: {
  bar: {
    horizontal: false;
    columnWidth: "50%";
    borderRadius: 6;
  }
}

yaxis: {
  show: false;
}
