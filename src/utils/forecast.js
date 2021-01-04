const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+encodeURIComponent(latitude)+'&lon='+encodeURIComponent(longitude)+'&units=imperial&appid=ad0f1772411599ead1b6b1aea0334049'

    request({url,json: true},(error,{body})=>{
        if(error){
            callback('Unable to connect Weather Services!',undefined)
        }else if(body.message){
            callback('Unable to find Location!')
        }else{
            callback(undefined,body.weather[0].description+" ,It is currently "+body.main.temp + " ,Temperature feels like is "+body.main.feels_like)
        }
    })

}

module.exports = forecast