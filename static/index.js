(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "PHP": 12,
  "Symfony": 3,
  "Elasticsearch": 2,
  "Docker": 9,
  "Doctrine": 1,
  "Java": 21,
  "Node.js": 9,
  "TypeScript": 18,
  "Vue.js": 1,
  "React": 18,
  "JavaScript": 23,
  "Heroku": 1,
  "ORM": 1,
  "Mongo": 1,
  "Scala": 1,
  "AWS": 7,
  "Sketch": 1,
  "Figma": 1,
  ".NET": 2,
  "Agile": 1,
  "Team Lead": 3,
  "jQuery": 1,
  "Ruby on Rails": 2,
  "Angular": 5,
  "Python": 21,
  "AngularJS": 3,
  "Git": 2,
  "Spring Boot": 4,
  "Kubernetes": 7,
  "MariaDB": 1,
  "MS SQL": 1,
  "Jenkins": 5,
  "ELK": 2,
  "Grafana": 1,
  "Prometheus": 3,
  "SQL": 5,
  "Bash": 1,
  "Shell": 1,
  "Airflow": 1,
  "AWS Glue": 1,
  "A/B Testing": 1,
  "Postgres": 1,
  "Tableau": 1,
  "Looker": 1,
  "Mixpanel": 1,
  "Google Data Studio": 1,
  "REST API": 1,
  "C#": 5,
  "WPF": 1,
  "XAML": 1,
  ".NET Core": 3,
  "DB": 1,
  "Laravel": 1,
  "MVC": 1,
  "REST APIs": 4,
  "Go": 15,
  "C++": 2,
  "Linux": 2,
  "DevOps": 3,
  "Boost": 1,
  "STL": 1,
  "Clang": 1,
  "MSVC": 1,
  "CSS": 9,
  "Vue": 3,
  "Redis": 4,
  "RabbitMQ": 4,
  "RESTful APIs": 6,
  "SaaS": 2,
  "K8S": 2,
  "Less": 2,
  "ReactJS": 7,
  "Node": 2,
  "CI/CD": 5,
  "VP Engineering": 2,
  "NodeJS": 5,
  "Tech Lead": 2,
  "PostgreSQL": 5,
  "Maven": 2,
  "Gradle": 2,
  "Glassfish": 2,
  "CDI": 2,
  "Wildfly": 2,
  "Eclipse": 2,
  "Android SDK": 2,
  "Kotlin": 4,
  "LAMP": 2,
  "HTML": 3,
  "SOLID": 2,
  "MongoDB": 2,
  "R": 2,
  "Data Engineering": 2,
  "Apache Airflow": 2,
  "SRE": 3,
  "Ruby": 3,
  "Ember": 1,
  "Ansible": 2,
  "Puppet": 1,
  "Terraform": 1,
  "Helm": 1,
  "NoSQL": 2,
  "Android": 1,
  "RxJava": 1,
  "Golang": 1,
  "Backend": 1,
  "BEM": 1,
  "OOP": 1,
  "JUnit": 1,
  "Mockito": 1,
  "React.js": 1,
  "Travis": 1,
  "GCP": 1,
  "Yocto": 1,
  "Embedded C": 1,
  "GraphQL": 1,
  "Fintech": 1,
  "Product Management": 1,
  "REST": 1,
  "RPC": 1,
  "JVM": 1,
  "MySQL": 1
}
},{}],2:[function(require,module,exports){

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
},{"../coutries.json":1}]},{},[2]);
