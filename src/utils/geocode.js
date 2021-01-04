const request = require('request')


const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWJoaXNoZWstMTEiLCJhIjoiY2tqY3RpbTVsMjRrdTJ0bXQ4aGI4bnZ4YiJ9.5RV9fXZlu051BjgqNfCMnA&limit=1'

    request({url, json: true },(error, {body})=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find Location,Try another search!',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })   
        }
    })
}


module.exports = geocode