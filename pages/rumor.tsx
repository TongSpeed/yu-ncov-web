import ModelView from '../src/components/TView';

import rumors from '../src/virus/rumors'
export default () =>
    <ModelView model={rumors({first:10 })} />