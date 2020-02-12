import React from "react";
import Chart from "../dashboard/Chart/Chart";
import { TContainer, TModel } from '../types'
import { getField, getFields, getFieldValue } from '../helper/modelHelper'

import Element from 'macoolka-ui-components/lib/Element'
import GridContainer from "../dashboard/Grid/GridContainer";

const ChartCard: React.SFC<{
    value: any[],
    model: TContainer<any>,

    title: React.ReactNode,
    subTitle: React.ReactNode
}
> = ({
    title,
    children,
    model:{
        divider
    }
}
) => {

        return <Element mkMarginV="small" mkBorder="bottom" mkBorderColor="divider">
            <Element mkMarginBottom="medium" mkTypography="h6">
                {title}
            </Element>
            <GridContainer>
            {children}
            </GridContainer>
           
        </Element >


    }
export default ChartCard
