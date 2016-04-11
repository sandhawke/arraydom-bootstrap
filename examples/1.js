const bs = require('arraydom-bootstrap')
const options = {}

options.title = 'My Document Title'
options.sections = []
options.sections.push(['div', {id:'intro'}, 'Hello, World!'])
options.sections.push(['div', {id:'outro'}, 'Goodbye, World!'])

bs.streamTo(options, process.stdout)

