
const getJson = require('../coutries.json')
function getData() {
    const data = getJson
    let series = []
    for (const lang in data) {
        if (Object.hasOwnProperty.call(data, lang)) {
            const element = data[lang]
            if (element >= 10) {
                console.log(lang, element)
                series.push({ name: lang, y: element })
            }
        }
    }
    return [{
        name: 'LANGUAGES GDP',
        points: series
    }]
}

var chart = JSC.chart('chartDiv', {
    toolbar_items_export_description: 'export menu',
    description: 'Accessible %type chart with legend',
    title: {
        description: '%type chart with title %title',
        position: 'center'
    },
    legend: {
        description: 'legend with %pointcount entries',
        template: '{%percentOfTotal:n1}% %icon %name',
        position: 'inside bottom',
        defaultEntry: { description: '%name' }
    },
    defaultSeries: {
        type: 'pie',
        pointSelection: true
    },
    defaultPoint: {
        label_text: '<b>%name</b>',
        description: '%name {%percentOfTotal:n1}%'
    },
    title_label_text: 'LANGUAGES GDP',
    yAxis: { label_text: 'GDP', formatString: 'n' },
    series: getData()
});