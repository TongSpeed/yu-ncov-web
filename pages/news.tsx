import ModelView from '../src/components/TView';

import newses from '../src/virus/newses'
export default () =>
    <ModelView model={newses({first:10 })} />