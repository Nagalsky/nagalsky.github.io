$(document).ready(function() {
  //Mobile menu action
  $(".navigation__toggle").on("click", function(e) {
    e.preventDefault();
    $(".navigation").toggleClass("navigation--is-opened");
    $(".navigation__overlay").toggleClass("navigation__overlay--is-opened");
  });

  $(".navigation__overlay").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("navigation__overlay--is-opened");
    $(".navigation").removeClass("navigation--is-opened");
  });

  //Bar chart initial
  var _barChart = function() {
    var options = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87]
        }
      ],
      chart: {
        type: "bar",
        height: 229,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%"
        }
      },
      title: {
        text: "Aantal afbeeldingen per maand",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "normal",
          fontFamily: "OpenSans-Regular",
          color: "#474747"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2
      },
      colors: ["#152339"],
      xaxis: {
        categories: ["Aug.", "Sep.", "Okt.", "Nov.", "Dec."],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 1
      },
      grid: {
        show: true,
        borderColor: "#707070"
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart-bar"), options);
    chart.render();
  };

  _barChart();

  //Initial Bootstrap popover
  $(function() {
    $('[data-toggle="popover"]').popover();
  });

  //Initial Bootstrap select
  $(function() {
    $(".selectpicker").selectpicker();
  });
});
