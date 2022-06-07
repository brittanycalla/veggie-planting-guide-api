const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

class MakeVeggie{
    constructor(startMonth,plantingDepth,sowingMethod,sproutTime,transplantMonth,matureSpacing,daysToHarvest){
      this['seed start month'] = startMonth
      this['seed planting depth inches'] = plantingDepth
      this['sowing method'] = sowingMethod
      this['avg days to sprout'] = sproutTime
      this['transplant month'] = transplantMonth
      this['mature spacing inches'] = matureSpacing
      this['avg days til first harvest'] = daysToHarvest

  }
}
let veggies = {}

let tomato = new MakeVeggie('March',.25,'transplant',10,'May',24,70)
veggies['tomato'] = tomato

let pepper = new MakeVeggie('March',.25,'transplant', 14,'May',24,75)
veggies['pepper'] = pepper

let unknown = new MakeVeggie('unknown','unknown','unknown','unknown','unknown','unknown','unknown')
veggies['unknown'] = unknown

// const veggies = {
//     'tomato':{
//         'seed start month': 'March',
//         'seed planting depth inches': .25,
//         'sowing method': 'transplant',
//         'avg days to sprout': 10,
//         'transplant month': 'May',
//         'mature spacing inches': 24,
//         'avg days til first harvest': 70,
//     },
//     'pepper':{
//         'seed start month': 'March',
//         'seed planting depth inches': .25,
//         'sowing method': 'transplant',
//         'avg days to sprout': 10,
//         'transplant month': 'May',
//         'mature spacing inches': 24,
//         'avg days til first harvest': 70,
//     }
// }

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const veggieName = req.params.name.toLowerCase()
    if(veggies[veggieName]){
        res.json(veggies[veggieName])
    }else{
        res.json(veggies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})