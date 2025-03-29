# typedoc-plugin-react

A [typedoc](https://typedoc.org/) plugin for use with [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org/) to 
fix-up the generated markdown of a React library.   The main use case is generating Docusaurus documentation.

## Installation

```shell
npm install https://github.com/mattlaue/typedoc-plugin-react
```

## Quickstart (Docusaurus)

* Install [docusaurus-plugin-typedoc](https://typedoc-plugin-markdown.org/plugins/docusaurus).

Create a `typedoc.json` file in your `Docusaurus` root directory containing:
```json
{
    "plugin": ["typedoc-plugin-markdown", "typedoc-plugin-react"],
    "pageTitleTemplates": {
        "index": "{projectName} {version}",
        "member": "{name}",
        "module": "{name}"
    }
}
```

## Example
[https://jotsu.com/docs/react-jotsu-js/](https://jotsu.com/docs/react-jotsu-js/)

See the individual source files examples of how to comment your code for `typedoc`.


## Development
`typedoc` plugins don't work well with `npm link` so it's best to pack/install.

In the plugin:
```shell
npm run build && npm pack
```

In `Docusaurus`:
```shell
npm install ../../typedoc-plugin-react/typedoc-plugin-react-1.0.0.tgz -f && npm run generate-typedoc
```

Generating the documentation will cause a rebuild if you are simultaneously running for `Docusaurus`:
```shell
npm run start
```
