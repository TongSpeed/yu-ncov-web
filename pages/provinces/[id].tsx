import ModelView from '../../src/components/TView';
import { useRouter } from 'next/router'
import provinces from '../../src/virus/provinces'
import { today5Day } from '../../src/helper/typeHelper'
export default () =>{
    const { query } = useRouter()
    return <ModelView model={provinces({ country: query.id, ...today5Day()}) }  />
}
   
  