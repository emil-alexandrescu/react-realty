import propertySearch from 'modules/PropertySearch/redux/saga';
import search from 'modules/Search/redux/saga';
import propertyDetail from 'modules/PropertyDetail/redux/saga';

export default function* root() {
  yield []
    .concat(search)
    .concat(propertySearch)
    .concat(propertyDetail);
}
