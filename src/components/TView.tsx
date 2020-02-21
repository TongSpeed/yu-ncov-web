import React from 'react';
import { TNode, Grid } from '../types'
import GridContainer from "../dashboard/Grid/GridContainer";
import GridItem from "../dashboard/Grid/GridItem";
import { isArray } from 'macoolka-predicate'
import Page from './Page'
import KeyCard from './KeyCard'
import Chart from './Chart'
import Table from './Table'
import Card from './Card'
import Container from './Contaner'
import FieldDisplay from './FieldDisplay'
import Query from './Query'
import Link from './Link'
let key = 0
const toChildModel = (parent: TNode<any>) => (child: TNode<any>): TNode<any> => ({
    model: parent.model,
    ...child,
})
const ModelView: React.SFC<{ model: TNode<any>, value?: any }> =
    ({ model, value }) => {
        const { transform } = model
        const toGrid = ({ grid }: Grid) => (a: React.ReactElement): React.ReactElement => grid ? (<GridItem {...grid}>{a}</GridItem>) : a
        const toItems = (v: any) => (param?: { items: TNode<any>[] | TNode<any>, isList?: boolean }): React.ReactNode => {
            if (param) {
                const { items, isList = false }: { items: TNode<any>[] | TNode<any>, isList?: boolean } = param;
                const toDataList = (f: (a: any) => React.ReactNode) => {
                    return isList ? v.map(f) : f(v)
                }
                if (isArray(items)) {
                    return toDataList(a => items.map(m => <ModelView key={key++} model={toChildModel(model)(m)} value={a} />))
                } else {
                    return toDataList(a => <ModelView key={key++} model={toChildModel(model)(items)} value={a} />)
                }
            } else {
                return null
            }

        }

        const to = (_a: any) => {
            const a = transform ? transform(_a) : _a
            let R
            switch (model._type) {
                case 'row': {
                    R = <Container
                        model={model}
                        value={a}
                        title={toItems(a)(model.title)}
                        subTitle={toItems(a)(model.subTitle)}
                    > {toItems(a)(model)}</Container>
                    break;
                }
                case 'page': {
                    R = <Page model={model} value={a}
                        title={toItems(a)(model.title)}
                        subTitle={toItems(a)(model.subTitle)}
                    > {toItems(a)(model)}</Page>
                    break;
                }
                case 'keycard':
                    R = <KeyCard model={model}
                        value={a}
                        title={toItems(a)(model.title)}
                        subTitle={toItems(a)(model.subTitle)}
                        footer={toItems(a)(model.footer)}
                    > </KeyCard>
                    break;
                case 'card':
                    R = <Card
                        model={model}
                        value={a}
                        title={toItems(a)(model.title)}
                        subTitle={toItems(a)(model.subTitle)}
                        footer={toItems(a)(model.footer)}
                    > {toItems(a)(model)}
                    </Card>
                    break;
                case 'chart':
                    R = <Chart model={model} value={a}> </Chart>
                    break;
                case 'table':
                    R = <Table model={model} value={a}> </Table>
                    break;

                case 'field':
                    R = <FieldDisplay model={model} value={a}> </FieldDisplay>
                    break;
                case 'link':
                        R = <Link as={model.as} href={model.href}>{model.title} </Link>
                        break;
                default:
                    R = <GridContainer> </GridContainer>
                    break;
            }
            return toGrid(model)(R)
        }
        return <Query callback={to} model={model} value={value} />
    }
export default ModelView