(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{59:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),s("p",[t._v("Vuex-ORM-GraphQL is a plugin for the amazing "),s("a",{attrs:{href:"https://github.com/vuex-orm/vuex-orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex-ORM")]),t._v(", which brings\nObject-Relational Mapping access to the Vuex Store. Vuex-ORM-GraphQL enhances Vuex-ORM to let you sync your Vuex state\nvia the Vuex-ORM models with your server via a "),s("a",{attrs:{href:"http://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL API")]),t._v(".")]),s("p",[t._v("The plugin will automatically generate GraphQL queries and mutations based on your model definitions and by\nreading your and GraphQL schema from your server. Thus it hides the specifics of Network Communication, GraphQL,\nCaching, De- and Serialization of your Data and so on from the developer. Getting a record of a model from the server\nis as easy as calling "),s("code",[t._v("Product.fetch()")]),t._v(". This allows you to write sophisticated Single-Page Applications fast and\nefficient without worrying about GraphQL.")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("You should have basic knowledge of "),s("a",{attrs:{href:"http://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL")]),t._v(", "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue")]),t._v(",\n"),s("a",{attrs:{href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex")]),t._v(" and "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex-ORM")]),t._v(" before reading this documentation.")])]),s("hr"),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#actions"}},[t._v("Actions")])]),s("li",[s("a",{attrs:{href:"#example-usage"}},[t._v("Example usage")])]),s("li",[s("a",{attrs:{href:"#connection-mode"}},[t._v("Connection Mode")])]),s("li",[s("a",{attrs:{href:"#license"}},[t._v("License")])])])]),s("p"),s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Actions")]),s("p",[t._v("While using Vuex-ORM with the GraphQL plugin you have to distinct between two types of Vuex actions:")]),s("ul",[s("li",[t._v("Vuex-ORM actions: Retrieve data from or save data to Vuex ("),s("code",[t._v("Vue Component <--\x3e Vuex Store")]),t._v(")")]),s("li",[t._v("Persistence actions: Load data from or persist data to the GraphQL API ("),s("code",[t._v("Vuex Store <--\x3e GraphQL Server")]),t._v(")")])]),s("p",[t._v("The following table lists all actions and what they do:")]),s("table",[s("thead",[s("tr",[s("th",[t._v("CRUD")]),s("th",[t._v("Vuex Only")]),s("th",[t._v("Persist to GraphQL API")])])]),s("tbody",[s("tr",[s("td",[s("strong",[t._v("R")]),t._v("EAD")]),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/retrieving-data.html#get-single-data",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("find()")])]),t._v(", "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/retrieving-data.html#get-all-data",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("all()")])]),t._v(", "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/retrieving-data.html#query-builder",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("query()")])])]),s("td",[s("a",{attrs:{href:"/guide/fetch"}},[s("code",[t._v("fetch()")])])])]),s("tr",[s("td",[s("strong",[t._v("C")]),t._v("REATE")]),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/inserting-and-updating-data.html#inserts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("create()")])]),t._v(" or "),s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/inserting-and-updating-data.html#inserts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("insert()")])])]),s("td",[s("a",{attrs:{href:"/guide/persist"}},[s("code",[t._v("$persist()")])])])]),s("tr",[s("td",[s("strong",[t._v("U")]),t._v("PDATE")]),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/inserting-and-updating-data.html#updates",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("$update()")])])]),s("td",[s("a",{attrs:{href:"/guide/push"}},[s("code",[t._v("$push()")])])])]),s("tr",[s("td",[s("strong",[t._v("D")]),t._v("ELETE")]),s("td",[s("a",{attrs:{href:"https://vuex-orm.github.io/vuex-orm/store/deleting-data.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("$delete()")])])]),s("td",[s("a",{attrs:{href:"/guide/destroy"}},[s("code",[t._v("$destroy()")])])])])])]),s("p",[t._v("See the example below to get an idea of how this plugin interacts with Vuex-ORM.")]),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example usage")]),s("p",[t._v("After "),s("a",{attrs:{href:"/guide/setup"}},[t._v("installing")]),t._v(" this plugin you can load data in your component:")]),s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user in users"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.id"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{user.name}}\n      \n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click.prevent")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("destroy(user)"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("x"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" User "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'data/models/user'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    computed"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n       * Returns all users with reactivity.\n       */")]),t._v(" \n      users"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" User"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("query")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("all")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("mounted")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Load all users form the server")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fetch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    \n    methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n      * Deletes the user from Vuex Store and from the server. \n      */")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("destroy")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" user"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$deleteAndDestroy")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("Vuex-ORM-GraphQL works with the "),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apollo Dev Tools")]),t._v("!")])]),s("h2",{attrs:{id:"connection-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Connection Mode")]),s("p",[t._v("It seems that there are several standards within the GraphQL community how connections (fields that returns multiple\nrecords) are designed. Some do this via a "),s("code",[t._v("nodes")]),t._v(" field, some via a "),s("code",[t._v("edges { nodes }")]),t._v(" query and some do neither of them.\nVuex-ORM-GraphQL tries to be flexible and supports all of them, but the example queries in the documentation work with\nthe "),s("code",[t._v("nodes")]),t._v(" query, don't be irritated. You'll find "),s("a",{attrs:{href:"/guide/connection-mode"}},[t._v("more details here")]),t._v(".")]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),s("p",[t._v("Vuex-ORM-GraphQL is open-sourced software licensed under the\n"),s("a",{attrs:{href:"https://github.com/phortx/vuex-orm-graphql/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT license")]),t._v(".")])])}],!1,null,null,null);a.default=e.exports}}]);