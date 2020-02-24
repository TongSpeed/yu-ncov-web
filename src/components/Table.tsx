import { TTable,mediaTypes } from 'macoolka-model-core'
import Hiddren, { HiddenProps } from '@material-ui/core/Hidden'
import React from "react";
import Table from "./ModelTable";
//import { getTFieldValue } from '../helper/modelHelper'
const hiddenProps: HiddenProps[] = [{ only:['lg','sm','md','xl']  }, {  only:['xs','md','lg','xl'] }, 
{  only:['xs','sm','lg',,'xl']  }, {  only:['xs','sm','md']  }]
export const TableList: React.SFC<{ value: any[], model: TTable<any> }> = ({ value, model }) => {
     
   // const titles = names.map(as => as.map(a => getTFieldValue(model)(value)({ field: a, type: 'label' })))
  //  const values = names.map(as => value.map(v => as.map(a => getTFieldValue(model)(v)({ field: a, type: 'value' }))))
     return <React.Fragment>
        {
            
            model.names.map((rowName, i) => 
       
                <Hiddren {...hiddenProps[i]}  key={i}>
                    
                    <Table
                       
                        tTable={model}
                        media={mediaTypes[i]}
                       
                        names={rowName}
                        value={value}
                    />
                </Hiddren>
            )
        }

    </React.Fragment>

}
export default TableList