# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.15.4](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.15.3...v3.15.4) (2019-07-07)


### Bug Fixes

* allow importing non component files ([5aa59a6](https://github.com/vue-styleguidist/vue-styleguidist/commit/5aa59a6)), closes [#436](https://github.com/vue-styleguidist/vue-styleguidist/issues/436)
* transform error into warning when NOENT ([296e1cd](https://github.com/vue-styleguidist/vue-styleguidist/commit/296e1cd))
* **docgen:** avoid parse files that are'nt potential components ([4b1e43b](https://github.com/vue-styleguidist/vue-styleguidist/commit/4b1e43b)), closes [#436](https://github.com/vue-styleguidist/vue-styleguidist/issues/436)
* **docgen:** resolve es6 modules properly ([1b4eb0a](https://github.com/vue-styleguidist/vue-styleguidist/commit/1b4eb0a)), closes [#478](https://github.com/vue-styleguidist/vue-styleguidist/issues/478)





## [3.15.3](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.15.2...v3.15.3) (2019-07-02)


### Bug Fixes

* **docgen:** make aliases only path parts instead of letters ([b83e235](https://github.com/vue-styleguidist/vue-styleguidist/commit/b83e235)), closes [#478](https://github.com/vue-styleguidist/vue-styleguidist/issues/478)





## [3.15.2](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.15.1...v3.15.2) (2019-07-02)


### Bug Fixes

* add simple bindings detection ([31a3fca](https://github.com/vue-styleguidist/vue-styleguidist/commit/31a3fca))
* make (Vue as VueConstructor<Vue>) resolved ([b7ed624](https://github.com/vue-styleguidist/vue-styleguidist/commit/b7ed624))
* **docgen:** adapt method handler to default params ([4f67f4e](https://github.com/vue-styleguidist/vue-styleguidist/commit/4f67f4e)), closes [#476](https://github.com/vue-styleguidist/vue-styleguidist/issues/476)
* **docgen:** make v-bind have a separate treatment ([cee2a9b](https://github.com/vue-styleguidist/vue-styleguidist/commit/cee2a9b)), closes [#469](https://github.com/vue-styleguidist/vue-styleguidist/issues/469)





# [3.15.0](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.14.5...v3.15.0) (2019-06-19)


### Bug Fixes

* **docgen:** fix template parsing expressions ([56a2e05](https://github.com/vue-styleguidist/vue-styleguidist/commit/56a2e05))


### Features

* **docgen:** add external proptypes parsing for docgen ([eaa4748](https://github.com/vue-styleguidist/vue-styleguidist/commit/eaa4748)), closes [#465](https://github.com/vue-styleguidist/vue-styleguidist/issues/465)
* **docgen:** support ts prop types ([c57c243](https://github.com/vue-styleguidist/vue-styleguidist/commit/c57c243)), closes [#413](https://github.com/vue-styleguidist/vue-styleguidist/issues/413)





## [3.14.5](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.14.4...v3.14.5) (2019-06-14)


### Bug Fixes

* **docgen:** fixed multiple use of same event needing desc ([329f66a](https://github.com/vue-styleguidist/vue-styleguidist/commit/329f66a)), closes [#459](https://github.com/vue-styleguidist/vue-styleguidist/issues/459)





## [3.14.4](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.14.3...v3.14.4) (2019-06-14)


### Bug Fixes

* update dependencies to re-enable HMR ([860e3bc](https://github.com/vue-styleguidist/vue-styleguidist/commit/860e3bc))
* **docgen:** get slot and scoped slot description in render without JSX ([33086cf](https://github.com/vue-styleguidist/vue-styleguidist/commit/33086cf))





## [3.13.8](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.13.7...v3.13.8) (2019-05-29)

**Note:** Version bump only for package vue-docgen-api





## [3.13.5](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.13.4...v3.13.5) (2019-05-22)


### Bug Fixes

* Additionally try absolute require.resolve in resolvePathFrom ([d1be583](https://github.com/vue-styleguidist/vue-styleguidist/commit/d1be583))
* Look through all roots. ([3641e4c](https://github.com/vue-styleguidist/vue-styleguidist/commit/3641e4c))





## [3.13.4](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.13.3...v3.13.4) (2019-05-15)


### Bug Fixes

* **docgen:** fix node_modules mixins parsing ([a4eed84](https://github.com/vue-styleguidist/vue-styleguidist/commit/a4eed84)), closes [#416](https://github.com/vue-styleguidist/vue-styleguidist/issues/416)
* make sure node_module resolved path ignored ([7a1092a](https://github.com/vue-styleguidist/vue-styleguidist/commit/7a1092a))





# [3.12.0](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.7...v3.12.0) (2019-04-25)


### Bug Fixes

* **docgen:** allow for not parsing jsx ([8b669f3](https://github.com/vue-styleguidist/vue-styleguidist/commit/8b669f3))
* **docgen:** give better error message lines ([9b04cc4](https://github.com/vue-styleguidist/vue-styleguidist/commit/9b04cc4))


### Features

* **docgen:** add jsx option to docgen ([0ce2a9e](https://github.com/vue-styleguidist/vue-styleguidist/commit/0ce2a9e))





## [3.11.6](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.5...v3.11.6) (2019-04-23)


### Bug Fixes

* make [@arg](https://github.com/arg) and [@argument](https://github.com/argument) accepted ([1b0ddca](https://github.com/vue-styleguidist/vue-styleguidist/commit/1b0ddca))
* **docgen:** update method for unpassing tests ([4f5c6cd](https://github.com/vue-styleguidist/vue-styleguidist/commit/4f5c6cd))





## [3.11.4](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.3...v3.11.4) (2019-04-03)


### Bug Fixes

* add vue-class-component management ([#371](https://github.com/vue-styleguidist/vue-styleguidist/issues/371)) ([d1aced1](https://github.com/vue-styleguidist/vue-styleguidist/commit/d1aced1))





## [3.11.3](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.2...v3.11.3) (2019-04-01)


### Bug Fixes

* **docgen:** protect uresolved events ([09d970f](https://github.com/vue-styleguidist/vue-styleguidist/commit/09d970f)), closes [#363](https://github.com/vue-styleguidist/vue-styleguidist/issues/363)





## [3.11.2](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.1...v3.11.2) (2019-03-28)

**Note:** Version bump only for package vue-docgen-api





## [3.11.1](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.11.0...v3.11.1) (2019-03-28)


### Bug Fixes

* **docgen:** make displayName tag work ([#358](https://github.com/vue-styleguidist/vue-styleguidist/issues/358)) ([c3e12ce](https://github.com/vue-styleguidist/vue-styleguidist/commit/c3e12ce)), closes [#357](https://github.com/vue-styleguidist/vue-styleguidist/issues/357)





# [3.11.0](https://github.com/vue-styleguidist/vue-styleguidist/compare/v3.10.2...v3.11.0) (2019-03-26)

**Note:** Version bump only for package vue-docgen-api
