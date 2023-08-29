window.onload = function () {
    // Options for the existing Counsellor Dashboard chart
    var counsellorOptions = {
        title: {
            text: "Counseller Wise Lead and Apllication Count"
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column",
            yValueFormatString: "#,###",
            indexLabel: "{y}",
            color: "#546BC1",
            dataPoints: [
                { label: "Anuradha Jayaram", y: 196 },
                { label: "Parveen P", y: 263 },
                { label: "Sheik Abdhulla A", y: 134 },
                { label: "Shika Yadav", y: 216 },
                { label: "Siya", y: 174 },
                { label: "Swathi", y: 122 },
                { label: "Hasini", y: 182 }
            ]
        }]
    };

    // Options for the Lead Stage Segregation Used For chart
    var leadstageoptions = {
        animationEnabled: true,
        title: {
            text: "Lead Stage Segregation",
            fontColor: "black"
        },
        axisY: {
            tickThickness: 0,
            lineThickness: 0,
            valueFormatString: " ",
            includeZero: true,
            gridThickness: 0
        },
        axisX: {
            tickThickness: 0,
            lineThickness: 0,
            labelFontSize: 18,
            labelFontColor: "black"
        },
        data: [{
            indexLabelFontSize: 26,
            toolTipContent: "<span style=\"color:black\">{indexLabel}:</span> <span style=\"color:black\"><strong>{y}</strong></span>",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            indexLabelFontWeight: 60,
            indexLabelFontFamily: "Verdana",
            color: "black",
            type: "bar",
            dataPoints: [
                { y: 21, label: "21%", indexLabel: "Fresh Lead" },
                { y: 25, label: "25%", indexLabel: "First Touch" },
                { y: 33, label: "33%", indexLabel: "Assesment" },
                { y: 36, label: "36%", indexLabel: "Interview" },
                { y: 42, label: "42%", indexLabel: "Enrolment" },
                { y: 49, label: "49%", indexLabel: "Test Lead" },
                { y: 50, label: "50%", indexLabel: "Closed" },
                { y: 55, label: "55%", indexLabel: "Untouched" },

            ]
        }]
    };
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Military Expenditure of Countries: 2016"
        },
        axisX: {
            interval: 1
        },
        axisY: {
            title: "Expenses in Billion Dollars",
            includeZero: true,
            scaleBreaks: {
                type: "wavy",
                customBreaks: [{
                    startValue: 80,
                    endValue: 210
                },
                {
                    startValue: 230,
                    endValue: 600
                }
                ]
            }
        },
        data: [{
            type: "bar",
            toolTipContent: "<img src=\"https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/\"{url}\"\" style=\"width:40px; height:20px;\"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP",
            dataPoints: [
                { label: "Israel", y: 17.8, gdp: 5.8, url: "israel.png" },
                { label: "United Arab Emirates", y: 22.8, gdp: 5.7, url: "uae.png" },
                { label: "Brazil", y: 22.8, gdp: 1.3, url: "brazil.png" },
                { label: "Australia", y: 24.3, gdp: 2.0, url: "australia.png" },
                { label: "South Korea", y: 36.8, gdp: 2.7, url: "skorea.png" },
                { label: "Germany", y: 41.1, gdp: 1.2, url: "germany.png" },
                { label: "Japan", y: 46.1, gdp: 1.0, url: "japan.png" },
                { label: "United Kingdom", y: 48.3, gdp: 1.9, url: "uk.png" },
                { label: "India", y: 55.9, gdp: 2.5, url: "india.png" },
                { label: "Russia", y: 69.2, gdp: 5.3, url: "russia.png" },
                { label: "China", y: 215.7, gdp: 1.9, url: "china.png" },
                { label: "United States", y: 611.2, gdp: 3.3, url: "us.png" }
            ]
        }]
    });
    chart.render();



    // Render the existing Counsellor Dashboard chart
    $("#chartContainer").CanvasJSChart(counsellorOptions);
    $("#chartdesing").CanvasJSChart(chart);

    // Render the Mobile Phones Used For chart
    $("#mobilePhonesChartContainer").CanvasJSChart(leadstageoptions);
};