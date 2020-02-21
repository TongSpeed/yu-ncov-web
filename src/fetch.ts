import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { showUnknow } from 'macoolka-object'
import zlib from 'zlib'
import axios from 'axios'
import gzip from 'gzip-js'
export const fetch = (root: string): Fetch => {
    /**
     * Fetch json from a url
     */
    const fetchJSON = <T>(path: string) => {
        return pipe(
            TE.tryCatch(() => axios.get(
                root + path,
                {
                    responseType: 'json',
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            ), error => {
                return showUnknow.show(error)
            }),
            TE.map(res => res.data as T)
        )
    }
    /**
     * Fetch text from a url
     */
    const fetchString = (path: string) => {
        return pipe(
            TE.tryCatch(() => axios.get(
                root + path,
                { responseType: 'arraybuffer' }
            ), error => {
                return showUnknow.show(error)
            }),
            TE.map(res => Buffer.from(res.data).toString('utf8') as string)

        )
    }

    /**
     * Fetch text from a url with gunzip
     */
    const fetchGunZip = (path: string) => {

        const p = () => new Promise<string>((resolver, reject) => {
            axios.get(
                root + path,

                {
                    headers: { 'Content-Type': 'application/json', 'Accept-Encoding': 'gzip' }
                }
            ).then(res => {
                var decoded = "";
                [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100].forEach(ch => decoded += (String.fromCharCode(ch)));
                undefined
                decoded
                "Hello world"
                gzip.unzip(res.data)

                return res.data;
                /*   zlib.gunzip(res.data as any, function (err, dezipped) {
                      if (err) {
          
                          reject(err)
                      }
                      if(dezipped){
                          resolver(dezipped.toString())
                      }else{
                          reject(`${root + path} parse gzip error`)
                      }
                     
                  }); */
                //console.log(a)
            })
        })
        return TE.rightTask(p)
        /*    return pipe(
               TE.tryCatch(() => axios.get(
                   root + path,
                   { responseType: 'arraybuffer' }
               ), error => {
                   return showUnknow.show(error)
               }),
               TE.chain(res =>{
                   console.log(res)
                   return TE.tryCatch<string, string>(() => new Promise<string>((resolver, reject) => {
                       console.log(222)
                       console.log(res.data)
                       zlib.gunzip(res.data as any, function (err, dezipped) {
                           if (err) {
       
                               reject(err)
                           }
                           if(dezipped){
                               resolver(dezipped.toString())
                           }else{
                               reject(`${root + path} parse gzip error`)
                           }
                          
                       });
                   }), showUnknow.show)
               }
               ),
               TE.mapLeft(error=>{
                   console.log(error)
                   return error
               })
           ) */
    }
    return {
        fetchGunZip,
        fetchString,
        fetchJSON,
    }
}


export interface Fetch {
    fetchGunZip: (path: string) => TE.TaskEither<string, string>
    fetchString: (path: string) => TE.TaskEither<string, string>
    fetchJSON: <T>(path: string) => TE.TaskEither<string, T>
}
export default fetch