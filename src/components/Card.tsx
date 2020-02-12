import React from "react";
import Card from "../dashboard/Card/Card";
import CardHeader from "../dashboard/Card/CardHeader";
import CardBody from "../dashboard/Card/CardBody";
import CardFooter from "../dashboard/Card/CardFooter";
import useStyles from '../style'
import Store from "@material-ui/icons/Store";
import LocalOffer from "@material-ui/icons/LocalOffer";
import { TCard } from '../types'
import { getTFieldValue } from '../helper/modelHelper'

import Element from 'macoolka-ui-components/lib/Element'
const ModelCard: React.SFC<{
    value: any[],
    model: TCard<any>,
    footer: React.ReactNode,
    title: React.ReactNode,
    subTitle: React.ReactNode
}> = ({
    children,
    footer: footerNode,
    title,
    subTitle,
    model:
    {
        color = "primary",

        cardType = 'stand',


    } }) => {
        const classes = useStyles();
        const footer = footerNode ? <CardFooter stats>
            <div className={classes.stats}>
                {footerNode}
            </div>
        </CardFooter> : null
        switch (cardType) {

            case 'media':
                return <Card chart>
                    <CardHeader color={color}>
                        {children}


                    </CardHeader>
                    <CardBody>
                       
                        <p className={classes.cardCategory}>{subTitle}</p>
                        <h3 className={classes.cardTitle}>
                            {title}
                        </h3>
                    </CardBody>
                    {footer}
                </Card>
            case 'article':
                return <Card chart>
                    <CardHeader >

                    <Element mkTypography="h6">{(title)}</Element>
                    <Element mkTypography="subtitle1" mkTextColor="warning.dark">{subTitle}</Element>
                    
                    </CardHeader>
                    <CardBody>
                        {children}
                    </CardBody>
                    {footer}
                </Card>
            default:
                return (

                    <Card>
                        <CardHeader color={color}>
                            <h4 className={classes.cardTitleWhite}>{(title)}</h4>
                            <p className={classes.cardCategoryWhite}>
                                {(subTitle)}
                            </p>
                        </CardHeader>

                        <CardBody>
                            {children}
                        </CardBody>
                        {footer}
                    </Card>


                );
        }

    }
export default ModelCard