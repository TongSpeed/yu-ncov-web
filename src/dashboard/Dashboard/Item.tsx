
import React from 'react'
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardIcon from "../Card/CardIcon.js";
import CardFooter from "../Card/CardFooter.js";
import { ColorProps } from '../types'
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import style from './dashboardStyle'
export interface DashboardItemProps {
    icon: React.ReactNode
    color?: ColorProps
    categoory: React.ReactNode
    title: React.ReactNode
    stats: React.ReactNode
}
const useStyles = makeStyles(style as any)
const DashboardItem: React.SFC<DashboardItemProps> = ({ icon, categoory, title, stats, color = "info" }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color={color} stats icon>
                <CardIcon color={color}>
                    {icon}
                </CardIcon>
                <p className={classes.cardCategory}>{categoory}</p>
                <h3 className={classes.cardTitle}>
                    {title}

                </h3>
            </CardHeader>
            <CardFooter stats>
                <div className={classes.stats}>
                    {stats}
                </div>
            </CardFooter>
        </Card>)
}
export default DashboardItem