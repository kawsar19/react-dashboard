import Chart from "react-apexcharts";

export const AreaChartComponent = () => {
  const chartData = {
    series: [
      {
        name: "Developer Edition",
        data: [150, 141, 145, 152, 135, 125],
        color: "green",
      },
    ],
    options: {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "green",
          gradientToColors: ["rgba(238,255,239,255)"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 4,
          right: 0,
          top: 0,
        },
      },

      xaxis: {
        show: true,
        categories: [
          "01 Feb",
          "02 Feb",
          "03 Feb",
          "04 Feb",
          "05 Feb",
          "06 Feb",
          "07 Feb",
        ],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-red-900 dark:fill-gray-400",
          },
          formatter: function (value: number) {
            switch (value) {
              case 150:
                return "High";
              case 125:
                return "Medium";
              case 135:
                return "Low";
              default:
                return "";
            }
          },
        },
      },
    },
  };

  return (
    <div className=" w-full bg-primary-300 rounded-lg p-4">
      <div className="pb-4">
        <h3 className="text-gray-900 font-semibold ">Hardware Devices</h3>
      </div>
      <div id="area-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={250}
        />
      </div>
    </div>
  );
};
