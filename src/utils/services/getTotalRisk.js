export function getTotalRisk(data) {
    const result = []

    data[0].data.map((item, id) => {
        result.push({date: item.date, totalDocuments: item.value, riskFactors: data[1].data[id].value})
    })

    return  result
}



