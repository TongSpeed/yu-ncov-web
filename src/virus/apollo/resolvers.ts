import { VirusData } from '../types'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
export const resolvers =(virus:VirusData)=> ({
  Query:{
    worldRecords: (root, args, context) => {
      //  const virus: VirusData = getVirus()
        return virus.worldRecords
    },
    countryRecords: (root, args, context) => {
       // const virus: VirusData = getVirus()
        const datas=args.last?virus.lastCountryRecords:virus.countryRecords
        return pipe(
            datas,
            A.filter(a => {
                if (args.country)
                    return args.country === a.country.id
                else
                    return true
            }),
         
         
        )
    },
    provinceRecords: (root, args, context) => {
       // const virus: VirusData = getVirus()
        const datas=args.last?virus.lastProvinceRecords:virus.provinceRecords
        return pipe(
            datas,
            A.filter(a => {
                let result = true
                if (args.country)
                    result = args.country === a.province.country.id
                if (args.province)
                    result = result && args.province === a.province.id

                return result
            }),
       
        )
    },
    cityRecords: (root, args, context) => {
       // const virus: VirusData = getVirus()
        const datas=args.last?virus.lastCityRecords:virus.cityRecords
        return pipe(
            datas,
            A.filter(a => {
                let result = true
                if (args.city)
                    result = args.city === a.city.id
                if (args.province)
                    result = result && args.province === a.city.province.id

                return result
            }),
      
        )
    },
    rumors: (root, args, context) => {
    
      //  const virus: VirusData = getVirus()
        const data=virus.rumors;
        const maxLength=data.length
        const {skip=0,first=10}=args
        const aSkip=skip>(maxLength)?maxLength:skip
        const end=(aSkip+first)>maxLength?maxLength:(aSkip+first)
 
        return data.slice(aSkip,end) 
    },
    news: (root, args, context) => {
      //  const virus: VirusData = getVirus()
        const data=virus.newses;
        const maxLength=data.length
        const {skip=0,first=10}=args
        const aSkip=skip>(maxLength)?maxLength:skip
        const end=(aSkip+first)>maxLength?maxLength:(aSkip+first)

        return data.slice(aSkip,end) 
       
    },
  }
});
export default resolvers