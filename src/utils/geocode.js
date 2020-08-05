const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2h3ZXRhYmhhbnVzaGFsaSIsImEiOiJja2Q0ZG85dHowNjY2MnluenpidnZ4c3MzIn0.WXuYqnppZQJraiUwEA68AA&limit=1'

    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to geo location server!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find. Try another search!', undefined)
        } else {
            const data = {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode