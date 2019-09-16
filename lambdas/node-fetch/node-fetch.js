/* eslint-disable */
const moment = require('moment')
const dfs = require('dropbox-fs')({
  apiKey: process.env.DROPBOX_ACCESS_TOKEN,
})

exports.handler = async function(event, context, callback) {
  const accessToken = process.env.DROPBOX_ACCESS_TOKEN
  console.log('AccessToken: ', accessToken)
  if (!event.body) {
    return callback(null, { statusCode: 400, body: error() })
  }

  const review = JSON.parse(event.body)
  await dfs.writeFile(toFilename(review), toMarkup(review), { encoding: 'utf-8' }, () => {})
  return {
    statusCode: 200,
    body: JSON.stringify({ status: '200', message: 'Success' }),
  }
}

const error = () => {
  return {
    statusCode: 400,
    body: JSON.stringify({ error: 'invalid request', message: 'Please provide a properly formatted request' }),
  }
}

const toFilename = review => {
  return `/performancereviews/${moment().format('YYYYMMDD')}_${review.firstName}_${review.lastName}.wiki`
}

const toMarkup = review => {
  let markup = ''
  markup += `= Performance Review ${review.firstName} ${review.lastName} =\n`
  markup += `\n`
  markup += `*Date:* ${moment().format('YYYY-MM-DD')}\n`
  markup += '\n'
  markup += '\n'
  markup += '== Work Achievements ==\n'
  markup += '\n'
  review.achievements.forEach(achievement => (markup += `  * ${achievement}\n`))
  markup += '\n'
  markup += '\n'
  markup += '== Behaviour ==\n'
  markup += '\n'
  ;(markup += `  * Communication: ${review.behaviour.communication}\n`),
    (markup += `  * Execution: ${review.behaviour.execution}\n`),
    (markup += `  * Implementation: ${review.behaviour.implementation}\n`),
    (markup += `  * Teamwork: ${review.behaviour.teamwork}\n`),
    (markup += `  * Innovation: ${review.behaviour.innovation}\n`),
    (markup += '\n')
  markup += '\n'
  markup += '== Strengths ==\n'
  markup += '\n'
  review.strengths.forEach(strength => (markup += `  * ${strength}\n`))
  markup += '\n'
  markup += '\n'
  markup += '== Opportunities ==\n'
  markup += '\n'
  review.opportunities.forEach(opportunity => (markup += `  * ${opportunity}\n`))

  return markup
}
