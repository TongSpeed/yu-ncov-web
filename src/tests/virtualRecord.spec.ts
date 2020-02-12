import {toVirusRecords} from '../virus/helper'
import {omit} from 'macoolka-object'
describe('virtulRecord',()=>{
    it('toVRecordNorm',()=>{
       const result= toVirusRecords([
            {confirmedCount:40,curedCount:7,deadCount:3,suspectedCount:120,recordAt:new Date()},
            {confirmedCount:30,curedCount:5,deadCount:2,suspectedCount:110,recordAt:new Date()},
            {confirmedCount:20,curedCount:3,deadCount:2,suspectedCount:100,recordAt:new Date()},
            {confirmedCount:10,curedCount:1,deadCount:0,suspectedCount:60,recordAt:new Date()},
        ]).map(a=>omit(a,'recordAt'))
        expect(result).toMatchSnapshot()
    })
})