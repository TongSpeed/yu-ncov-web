import ModelView from '../../src/components/TView';
import { useRouter } from 'next/router'
import city from '../../src/virus/city'
export default () =>{
    const { query } = useRouter()
    return <ModelView model={city({ city: [query.id]}) }/>
}