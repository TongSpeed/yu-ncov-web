import * as TE from 'fp-ts/lib/TaskEither'
import {  showUnknow } from 'macoolka-object'
import * as zlib from 'zlib';
const gzip = (a: string) => TE.tryCatch<string, string>(() => new Promise<string>((resolve, reject) => {
       
    zlib.gzip(Buffer.from(a,'utf8'), (error, result) => {
        if (error) {
            reject(error)
        }
        return resolve(result.toString('base64'))
    })
}), (error) => {
    return showUnknow.show(error)
})
const gunzip = (a: string) => TE.tryCatch<string, string>(() => new Promise<string>((resolve, reject) => {
  
    zlib.gunzip(Buffer.from(a, 'base64'), (error, result) => {
        if (error) {
            reject(error)
        }
        try{
            return resolve(result.toString())
        }catch(error){
            reject(error)
        }
       
    })
}), (error) => {
    return showUnknow.show(error)
})
export const gzipAction:GZipAction={
    gzip,
    gunzip,
}

export interface GZipAction {
    gzip: (path: string) => TE.TaskEither<string, string>
    gunzip: (path: string) => TE.TaskEither<string, string>
    
}
export default gzipAction