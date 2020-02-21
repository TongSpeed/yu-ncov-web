import {fromJsonToVirus,toVirusData} from '../helper'

import _virus from '../../../virus.json'
describe('',()=>{
    it('',()=>{
        const result=toVirusData(fromJsonToVirus(_virus as any))
        console.log(result.worldRecords.slice(0,3))
        
        console.log(result.countryRecords.slice(0,3))
    })
})
