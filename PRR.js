google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', '房價租金比 Years',{ role: 'style' }],
          ['台灣',  64,'#ff000F'],
          ['印度',  42,'#4285F4'],
          ['新加坡',  41,'#4285F4'],
          ['中國',  38,'#4285F3'],
          ['香港',  33,'#4285F4'],
          ['馬來西亞',  21,'#4285F3'],
          ['柬埔寨',  19,'#4285F4'],
          ['日本',  18,'#4285F4'],
          ['泰國',  16,'#4285F4'],
          ['印尼',  14,'#4285F3'],
          ['菲律賓',  14,'#4285F4']
        ]);

        var options = {
          title: '台灣與主要國家房價租金比',
          vAxis: {title: '年數',  titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
