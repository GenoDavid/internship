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

    // Render the existing Counsellor Dashboard chart
    $("#chartContainer").CanvasJSChart(counsellorOptions);

    // Render the Mobile Phones Used For chart
    $("#mobilePhonesChartContainer").CanvasJSChart(leadstageoptions);
};