import React from "react";
import Chart from "../dashboard/Chart/Chart";
import { TChart, TModel } from '../types'
import { getField, getFields, getFieldValue } from '../helper/modelHelper'

import Hiddren, { HiddenProps } from '@material-ui/core/Hidden'
import { formatShortMonthDay } from '../helper/typeHelper'

const hiddenProps: HiddenProps[] = [{ only: ['lg', 'sm', 'md', 'xl'] }, { only: ['xs', 'md', 'lg', 'xl'] },
{ only: ['xs', 'sm', 'lg', , 'xl'] }, { only: ['xs', 'sm', 'md'] }]
const fieldToChartData = (model: TModel) => ({ lableName, valueNames }: Pick<TChart<any>, 'lableName' | 'valueNames'>,
    hideLabel: boolean = false) =>
    (as: any[]) => {
        const labelField = getField(model)(lableName)
        const seriesFields = getFields(model)(valueNames)
        const labels = as.map(value => {
            const _lableValue = getFieldValue(labelField)(value)

            return (labelField.type === 'date' || labelField.type === 'datetime') ? formatShortMonthDay(_lableValue) : _lableValue
        })
        const seriesValue = seriesFields.map(seriesField => as.map(value => {
            const _value = getFieldValue(seriesField)(value)
            return _value
        })

        )

        return {
            labels: hideLabel ? labels.map(() => '') : labels,
            series: seriesValue
        } as { labels: string[], series: number[][] }

    }
const ChartCard: React.SFC<{ value: any[], model: TChart<any> }> = ({
    model: {
        chartType,
        model,
        lableName,
        valueNames,
        hideLabels
    },
    value
}
) => {

    return <React.Fragment>{
        hideLabels.map((v, i) =>
            <Hiddren {...hiddenProps[i]} key={i}>
                <Chart
                    data={{
                        ...fieldToChartData(model)({
                            lableName,
                            valueNames
                        }, v)(value)
                    }}
                    type={chartType}

                />
            </Hiddren>)}

    </React.Fragment>

}
export default ChartCard
