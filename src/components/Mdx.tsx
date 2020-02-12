import React from "react";
import MDX from 'react-markdown'
const ModelCard: React.SFC<{ 
    value:string
    }> = ({
       value }) => {
   
     return <MDX source={value}>
         
        </MDX>
}
export default ModelCard