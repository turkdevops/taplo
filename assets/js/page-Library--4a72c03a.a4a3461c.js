(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{468:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#library"}},[t._v("#")]),t._v(" Library")]),t._v(" "),a("p",[t._v("Taplo is available as a library for the following languages:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.javascript.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript/Typescript"),a("OutboundLink")],1),t._v(" (Node.js and modern browsers)")])]),t._v(" "),a("h2",{attrs:{id:"rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[t._v("#")]),t._v(" Rust")]),t._v(" "),a("p",[t._v("The full API documentation with examples is available "),a("a",{attrs:{href:"https://docs.rs/taplo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The library is published at "),a("a",{attrs:{href:"https://crates.io/crates/taplo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crates.io"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To use the latest version, add it to your dependencies:")]),t._v(" "),a("p",[a("code",[t._v('taplo = "*"')])]),t._v(" "),a("p",[t._v("The available features can be found in the "),a("a",{attrs:{href:"https://docs.rs/taplo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Linting")])]),t._v(" "),a("li",[a("strong",[t._v("Validation (based on JSON schema)")]),t._v(" with the help of "),a("a",{attrs:{href:"https://github.com/GREsau/schemars",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schemars"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/tamasfe/verify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Verify"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("strong",[t._v("Lossless syntax-tree")]),t._v(" every token is preserved as-is")]),t._v(" "),a("li",[a("strong",[t._v("JSON-like DOM Tree")])]),t._v(" "),a("li",[a("strong",[t._v("Serialization To Other Formats")]),t._v(" with "),a("a",{attrs:{href:"https://serde.rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Serde"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("strong",[t._v("DOM Manipulation")]),t._v(" ("),a("strong",[t._v("WIP")]),t._v(") Rewriting parts of the DOM while not touching anything else")]),t._v(" "),a("li",[a("strong",[t._v("Formatting")]),t._v(" With configurable options")]),t._v(" "),a("li",[a("strong",[t._v("Scoped Formatting Options")]),t._v(" Formatting options that affect only a part of the document")])]),t._v(" "),a("h3",{attrs:{id:"comparison-to-toml-rs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-to-toml-rs"}},[t._v("#")]),t._v(" Comparison To "),a("a",{attrs:{href:"https://github.com/alexcrichton/toml-rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("toml-rs"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/alexcrichton/toml-rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("toml-rs"),a("OutboundLink")],1),t._v(" focuses more on the data inside TOML documents, while Taplo cares about the TOML document itself, the position of comments is just as important as the data.")]),t._v(" "),a("p",[t._v("While there is some overlap in functionality, the two tools serve different purposes, in fact "),a("a",{attrs:{href:"/cli"}},[t._v("Taplo CLI")]),t._v(" actually uses "),a("a",{attrs:{href:"https://github.com/alexcrichton/toml-rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("toml-rs"),a("OutboundLink")],1),t._v(" for reading its own configuration file.")]),t._v(" "),a("p",[t._v("All this also means, that Taplo will always be slower by nature, however not by much ("),a("em",[t._v("as of Taplo "),a("code",[t._v("0.1.0")])]),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("test bench_taplo_parse          ... bench:     109,804 ns/iter (+/- 1,187)\ntest bench_taplo_parse_validate ... bench:     220,236 ns/iter (+/- 6,148)\ntest bench_toml_rs              ... bench:     140,089 ns/iter (+/- 1,392)\n")])])]),a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),a("p",[t._v("Taplo can also be used in Node.js and browsers that support running "),a("a",{attrs:{href:"https://webassembly.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebAssembly"),a("OutboundLink")],1),t._v(",\nit has no additional dependencies and is contained in a single "),a("code",[t._v(".js")]),t._v(" file.")]),t._v(" "),a("h3",{attrs:{id:"installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The library is available as a NPM package "),a("a",{attrs:{href:"https://www.npmjs.com/package/@taplo/lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Install with Yarn:")]),t._v(" "),a("p",[a("code",[t._v("yarn add @taplo/lib")])]),t._v(" "),a("p",[t._v("Or with NPM:")]),t._v(" "),a("p",[a("code",[t._v("npm install --save @taplo/lib")])]),t._v(" "),a("h3",{attrs:{id:"features-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features-2"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[t._v("The features are limited compared to the Rust library. There are plans to expose everything that Taplo can offer, however it is not trivial and requires some effort.")]),t._v(" "),a("p",[t._v("Currently only a high-level API is provided for the following:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Linting")])]),t._v(" "),a("li",[a("strong",[t._v("Validation (based on JSON schema)")])]),t._v(" "),a("li",[a("strong",[t._v("Formatting")]),t._v(": With configurable options")])]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Only a single "),a("a",{attrs:{href:"http://localhost:8080/api/javaScript/classes/_index_.taplo/#class-taplo",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Taplo")]),a("OutboundLink")],1),t._v(" class is exported, and every operation can be done through it.")]),t._v(" "),a("p",[t._v("It must be initialized asynchronously with its "),a("RouterLink",{attrs:{to:"/api/javaScript/classes/_index_.taplo/#initialize"}},[a("code",[t._v("initialize")])]),t._v(" method, "),a("strong",[t._v("any attempts to create it with "),a("code",[t._v("new")]),t._v(" will throw an error")]),t._v(".\nThis is needed because the WebAssembly module has to be compiled before use.")],1),t._v(" "),a("p",[t._v("The initialization is rather expensive performance-wise, but it has to be once, and subsequent calls to "),a("code",[t._v("initialize")]),t._v(" will be basically free.")]),t._v(" "),a("p",[t._v("An example usage:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Taplo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"taplo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Somewhere at the start of your app.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" taplo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Taplo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The other methods will not return promises.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formatted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" taplo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tomlDocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"api-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API Reference")]),t._v(" "),a("p",[t._v("The auto-generated API reference is available "),a("a",{attrs:{href:"/api/javaScript"}},[t._v("here")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);