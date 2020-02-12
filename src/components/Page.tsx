import React from 'react';
import { TPage } from '../types'
import GridContainer from "../dashboard/Grid/GridContainer";
import Element from 'macoolka-ui-components/lib/Element'
import {isFunction} from 'macoolka-predicate'
import PageTitle from './PageTitle'
const Page: React.SFC<{ model: TPage<any>, value: any , title: React.ReactNode,
    subTitle: React.ReactNode }> = ({title,subTitle, model, value, children }) => {
    const { titles } = model;
  
   
    return <main>
        <PageTitle pageTitles={isFunction(titles)?titles(value):titles}></PageTitle>
        <Element mkTypography='subtitle1' mkTextColor="text.secondary">{title}</Element>
        <Element mkTypography='subtitle1' mkTextColor="text.secondary">{(subTitle)}</Element>
        <GridContainer>
            {children}
        </GridContainer>
    </main>
}
export default Page