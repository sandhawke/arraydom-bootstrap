const arraydom = require('arraydom')
const bs = require('arraydom-bootstrap')
const options = {}

options.title = 'My Document Title'
// ... other options

process.stdout.write(arraydom.stringify(bs.document(options)))
