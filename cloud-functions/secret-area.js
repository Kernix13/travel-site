exports.handler = function (event, context, callback) {
  const secretContent = `
  <h3>Welcome to the Client Area</h3>
  <p>Some special text or links would go here for the client after entering the password.</p>
  `

  let body

  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401
    })
  }
}