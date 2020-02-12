import React from "react";
import Card from "../dashboard/Card/Card";
import CardHeader from "../dashboard/Card/CardHeader";
import CardIcon from "../dashboard/Card/CardIcon";
import CardFooter from "../dashboard/Card/CardFooter";
import useStyles from '../style'
import Store from "@material-ui/icons/Store";
import LocalOffer from "@material-ui/icons/LocalOffer";
import { TKeyCard } from '../types'
import { getTFieldValue } from '../helper/modelHelper'
const ModelCard: React.SFC<{ 
    value: any[],
     model: TKeyCard<any> ,
     title: React.ReactNode,
     subTitle: React.ReactNode
     footer: React.ReactNode,
    }> = ({
        title,
        subTitle,
        footer:_footer,
     model:
    { 
        color = "primary",
     
        HeadIcon = Store,
        InfoIcon = LocalOffer,
      
        
    } }) => {
    const classes = useStyles();
    const footer = _footer ? <CardFooter stats>
        <div className={classes.stats}>
         
            {_footer}
        </div>
    </CardFooter> : null

    return <Card>
        <CardHeader color={color} stats icon>
            <CardIcon color={color}>
                <HeadIcon />
            </CardIcon>
            <p className={classes.cardCategory}>{(title)}</p>
            {subTitle ? <h3 className={classes.cardTitle}>
                {(subTitle)}
            </h3> : null}
        </CardHeader>
        {footer}


    </Card>



}
export default ModelCard