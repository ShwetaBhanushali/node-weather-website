const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=58ef17f40641b5bfc20a696c39fcadc4&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to weather server!')
            callback('Unable to connect to weather server!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast