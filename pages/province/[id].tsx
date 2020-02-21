import ModelView from '../../src/components/TView';
import { useRouter } from 'next/router'
import province from '../../src/virus/province'
export default () => {
    const { query } = useRouter()
    return <ModelView model={province({ province: query.id })} />
}