import React from 'react';
import { TFieldDisplay } from '../types'
import { getTFieldValue } from '../helper/modelHelper'
import {isString} from 'macoolka-predicate'
import Mdx from './Mdx'


const formatMarkdown=(a:any)=>{
    if(isString(a)){
        return a.trim().replace('\n','\n\n')
        
    }else{
        return a
    }
}
const FieldDisplay: React.SFC<{ model: TFieldDisplay<any>, value: any }> = ({ model, value, children }) => {
    const { model: _model, field, type } = model;
    const fieldValue = getTFieldValue(_model)(value)(field)
    switch (type) {
        case 'markdown':{
            return <Mdx value={formatMarkdown(fieldValue) as string}></Mdx>
        }
        default: {
            return fieldValue as any;//isString(fieldValue)?<Element>{fieldValue}</Element>:fieldValue as any
        }
    }
}
export default FieldDisplay