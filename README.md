# [brettinternet.com](https://brettinternet.com)

### technologies

- typescript
- babel
- webpack
- eleventy
- pug
- tailwind
- sass
- postcss & purgecss
- lodash
- responsive images
- lazy load & blur up images
- self-hosted fonts
- syntax highlighting code blocks
- prettier
- eslint, stylelint
- commit linting
- github actions

### todo

- [x] values in `data/routes.js` are not importing in pug locals
- [x] `@font-face` is not being handled by a loader
- [x] dev server ought to restart after modifying `includes/**/*`
- [x] don't transpile `scripts/utils` to `build` directory, or remove after build
- [x] why does bundling a CSS file also bundle a JS equivalent?
- [x] build can't resolve `/files/<font>`
- [x] build doesn't bundle SVGs - or improve how Feather icons are bundled/utilized
- [x] how to correctly bundle separate pages? - can't get html-webpack-plugin to work on multiple files
- [x] handle relative assets for nested pages - use absolute links to assets (and support path prefix)
- [x] easy page routing
- [x] fix tailwind theme
- [x] fix styles and adopt tailwind
- [x] fix header JS in prod
- [x] handle images (responsive images with Sharp?)
- [x] add a few pages
- [x] add meta tags (og, twitter)
- [x] lint
- [x] archive page
- [x] fix mysterious error `Unable to find an instance of HtmlWebpackPlugin in the current compilation.`
- [x] fix post collections to not use tags
- [x] shortcodes for blur up/lazy loading images in markdown?
- [x] add transform fn to ~~webpack~~ eleventy to handle relative paths
- [x] fix blur up in prod!
- [x] syntax highlighting for pug templates [with markdown-it](https://pugjs.org/language/filters.html)
- [x] design homepage cards
- [x] add cards to sidebar
- [x] render basic images when page.url === '/feed/', add long descriptions for complicated pages, and for posts add post processing with html-webpack-plugin
- [x] add feed page
- [x] add 404 page
- [x] add edit page button
- [x] add temporary logic to handle gifs with file-loader ~~will gifs work with responsive loader now that sharp supports them?~~
- [-] fix inline svg plugin
- [ ] optimize gifs
- [x] add projects to archive
- [ ] open PR for responsive-loader to handle gifs
- [ ] [tag pages](https://www.11ty.dev/docs/quicktips/tag-pages/)
- [ ] add tag breadcrumbs to archive directory
- [ ] optimize fonts with [subfont](https://github.com/Munter/subfont/issues/108#issuecomment-659468935) - requires [python](https://github.com/actions/setup-python)
- [x] setup ci action
- [x] setup deployment action
- [ ] push to blog repo
- [ ] [async data requests](https://www.11ty.dev/docs/quicktips/cache-api-requests/)
- [ ] integrate [critical](https://github.com/addyosmani/critical) like [this](https://github.com/anthonygore/html-critical-webpack-plugin/blob/master/src/index.js)
- [ ] transfer slides over
