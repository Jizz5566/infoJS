/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-19 19:23:00
 * @version $Id$
 */
google.load('visualization', '1', {packages: ['orgchart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');
    data.addRows([
        [{v: '000', f: '租稅制度<div style="color:#196589; font-style:italic">境內稅</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '', '租稅分類'],
        [{v: '010', f: '所得稅<div style="color:#196589; font-style:italic">對人或對物</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '000', '國稅'],
        [{v: '020', f: '消費稅<div style="color:#196589; font-style:italic">對人或對物</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '000', ''],
        [{v: '030', f: '財產稅<div style="color:#196589; font-style:italic">對人或對物</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '000', ''],
        [{v: '040', f: '流通稅<div style="color:#196589; font-style:italic"></div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '000', ''],
        [{v: '050', f: '其他<div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '000', '其他'],
        [{v: '011', f: '綜合所得稅<div style="color:#196589; font-style:italic">自然人</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '010', '所得稅'],
        [{v: '012', f: '營利事業所得稅<div style="color:#196589; font-style:italic">法人</div>'}, '010', '所得稅'],
        [{v: '013', f: '所得基本稅額<div style="color:#196589; font-style:italic">法人</div>'}, '010', '所得稅'],
        [{v: '0111', f: '<div class="BB">財產交易所得稅</div><div style="color:#196589; font-style:italic">對人</div>'}, '011', '所得稅'],
        [{v: '0112', f: '其他分類所得稅<div style="color:#196589; font-style:italic">對物</div>'}, '011', '所得稅'],
        [{v: '021', f: '<div class="BB">特種貨物及勞務稅(奢侈稅)</div><div style="color:#196589; font-style:italic">對物</div>'}, '020', '特種銷售稅但對房地產交易則為流通稅'],
        [{v: '022', f: '貨物稅<div style="color:#196589; font-style:italic">特種銷售稅</div>'}, '020', '省稅'],
        [{v: '023', f: '菸酒稅<div style="color:#196589; font-style:italic">特種銷售稅</div>'}, '020', '消費稅'],
        [{v: '024', f: '娛樂稅<div style="color:#196589; font-style:italic">特種銷售稅</div>'}, '020', '消費稅'],
        [{v: '025', f: '消費型營業稅<div style="color:#196589; font-style:italic">一般多階段消費型銷售稅</div>'}, '020', '省稅'],
        [{v: '031', f: '<div class="BB">遺產與贈與稅</div><div style="color:#196589; font-style:italic">財富稅</div>'}, '030', '財產稅'],
        [{v: '032', f: '不動產稅<div style="color:#196589; font-style:italic">對物</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '030', '對物'],
        [{v: '0321', f: '<div class="BB">房屋稅</div><div style="color:#196589; font-style:italic">不動產稅</div><div class="plus"><img src="http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg"></div>'}, '032', '財產稅'],
        [{v: '0322', f: '<div class="BB">地價稅</div><div style="color:#196589; font-style:italic">土地稅</div>'}, '032', '地方稅'],
        [{v: '0323', f: '<div class="BB">土地增值稅</div><div style="color:#196589; font-style:italic">土地稅</div>'}, '032', '所得稅或財產稅'],
        [{v: '0324', f: '田賦<div style="color:#196589; font-style:italic">土地稅</div>'}, '032', '地方稅'],
        [{v: '03211', f: '<div class="BB">高級住宅加價課徵房屋稅(豪宅稅)</div><div style="color:#196589; font-style:italic">不動產稅</div>'}, '0321', '財產稅'],
        [{v: '041', f: '<div class="BB">契稅</div>'}, '040', '流通稅'],
        [{v: '042', f: '證券交易稅'}, '040', '國稅'],
        [{v: '043', f: '期貨交易稅'}, '040', '流通稅'],
        [{v: '051', f: '<div class="BB">印花稅</div>'}, '050', '省稅'],
        [{v: '052', f: '牌照稅'}, '050', '省稅']
    ]);
    
    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    var options = {
        allowHtml: true
    };
    
    var runOnce = google.visualization.events.addListener(chart, 'ready', function() {
        // set up + sign event handlers
        var previous;
        $('#chart_div').on('click', 'div.plus', function () {
            var selection = chart.getSelection();
            var row;
            if (selection.length == 0) {
                row = previous;
            }
            else {
                row = selection[0].row;
                previous = row;
            }
            var collapsed = chart.getCollapsedNodes();
            var collapse = (collapsed.indexOf(row) == -1);
            
            chart.collapse(row, collapse);
            chart.setSelection();
            
            // get a new list of collapsed nodes
            collapsed = chart.getCollapsedNodes();
            
            // change the expand/collapse sign
            var plusSrc = 'http://google.github.io/material-design-icons/content/svg/ic_add_circle_24px.svg';
            var minusSrc = 'http://google.github.io/material-design-icons/content/svg/ic_remove_circle_24px.svg';
            var src = (collapse) ? plusSrc : minusSrc;
            data.setFormattedValue(row, 0, data.getFormattedValue(row, 0).replace(/src=".*"/i, 'src="' + src + '"'));
            
            // set up event listener to recollapse nodes after redraw
            var runOnce2 = google.visualization.events.addListener(chart, 'ready', function() {
                google.visualization.events.removeListener(runOnce2);
                for (var i = 0; i < collapsed.length; i++) {
                    chart.collapse(collapsed[i], true);
                }
            });
            
            // redraw the chart to account for the change in the sign
            chart.draw(data, options);
        });
        
        // remove this event listener *before* collapsing nodes
        // otherwise this runs multiple times
        google.visualization.events.removeListener(runOnce);
        
        // collapse all nodes
        for (var i = 0; i < data.getNumberOfRows(); i++) {
            chart.collapse(i, true);
        }
    });
    
    chart.draw(data, options);
}
