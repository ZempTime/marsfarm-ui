# Directory Structure

Longer-term goals:
* Adopt the prpl pattern
  * App-shell
  * Dynamically extending/rebuilding reduxers/actions/data services along with web components
* Full-fledged PWA
* Ability to serve as intermediary for intelligent data sync


Redux-specific:
* In the vein of [ducks](https://github.com/alexnm/re-ducks), adopting an approach modified for polymer 3:
  * component
  * data service
  * reducers
  * actions
  * action creators
  * redux behavior/mixin
  * utils

However, shorter-term, I don't know what my domain structure will really be. I'd like to see what emerges before deciding.

Shorter-term directory structure approach:
* **Pages**: pages one can navigate to. These will form the basis of the app-shell strategy later
* **Mixins**: generally this is what will be reworked into the ducks-approach later.
  * data-service
  * specific domain element mixins (ex: temperature-mixin)
* **Components**: elements that the pages pull in