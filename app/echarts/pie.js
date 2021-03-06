module.exports = {
    pieFund(data,color) {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} ({d}%)"
            },
            calculable: true,
            series: [
                {
                    name: '投资平台',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: data
                }
            ],
            color: color
        };
        return option;
    },
    pieYulun(data) {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '舆论分布',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
        return option;
    }

}