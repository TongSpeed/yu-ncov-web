
import ModelView from '../../src/components/TView';
import { useRouter } from 'next/router'
import country from '../../src/virus/country'
export default () => {
    const { query } = useRouter()
    return <ModelView model={country({ country: query.id })} />
}