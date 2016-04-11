
Generate (Boostrap)[http://getbootstrap.com/] documents out of
configuration options, including arraydom fragments.

```javascript
const bs = require('arraydom-bootstrap')
const options = {}

options.title = 'My Document Title'
options.sections = []
options.sections.push(['div', {id:'intro'}, 'Hello, World!'])
options.sections.push(['div', {id:'outro'}, 'Goodbye, World!'])

bs.streamTo(options, process.stdout)
```

or more verbose:

```javascript
const arraydom = require('arraydom')
const bs = require('arraydom-bootstrap')
const options = {}

options.title = 'My Document Title'
// ... other options

process.stdout.write(arraydom.stringify(bs.document(options)))
```



## options.author

For the HTML head 'author' field.  String.

## options.bodyAttrs

This becomes the body elements attrs object

## options.bodyScriptURLs

Array of URLs for scripts to load at the end of the page

## options.copyright

For the footer copyright statement.  String or arraydom tree.

## options.cssURLs

Array of URLs for CSS to load, after bootstrap

## options.description

For the HTML head 'description' field.  String.

## options.headScriptURLs

Array of URLs for scripts to load at the beginning of the page

## options.iconURL

URL for favico

## options.lang

HTML lang attribute, eg 'en'

## options.sections

Array of arraydom trees, the top-level sections of the page

Each one must have an 'id', which is used for nav generation.

Each one may have a _label, which is shown in the menu, instead of the id, if present.

## options.title

The page title
