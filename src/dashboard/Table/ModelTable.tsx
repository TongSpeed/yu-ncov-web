import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableSortLabel from '@material-ui/core/TableSortLabel';
import * as A from 'fp-ts/lib/Array'

import { pipe } from 'fp-ts/lib/pipeable'
import styles from "./tableStyle";
import { Order,TTable } from '../../types'
import { getField, isNumberType, getTFieldValue, getOrdByField,getModelDataArray } from '../../helper/modelHelper'
const useStyles = makeStyles(styles as any);

const ModelTable: React.SFC<{

  media?:'xs'|'sm'|'lg'|'xl'
  isCheck?: boolean
  isSort?: boolean
 
  names: string[]
  tTable:TTable<any>,
 // ord?: { name: string, order: Order }
  value: any[]
  // tableData: React.ReactNode[][]
}> = (props) => {
  const classes = useStyles();
  const {  names,  value ,media,tTable} = props;
  const {model}=tTable
  const values = getModelDataArray(model)(value)
  
  const [order, setOrder] = React.useState<Order>(tTable.ord ? tTable.ord.order : 'asc');
  const [orderBy, setOrderBy] = React.useState<string | undefined>(tTable.ord ? tTable.ord.name : undefined);
  const tableHeaderColor=tTable.color?tTable.color:'primary'
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {names !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {names.map((name, key) => {
                const field = getField(model)(name)
                return (<TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  key={field.name}

                  align={isNumberType(field) ? 'right' : 'left'}
                  //  padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === field.name ? order : false}
                >
                  <TableSortLabel
                   className={classes.sortLabel}
                    active={orderBy === field.name}
                    direction={orderBy === field.name ? order : 'asc'}
                    onClick={() => handleRequestSort(field.name)}
                  >
                    {((media==='xs' ||media==='sm') &&field.shortTitle)?field.shortTitle:field.title}

                    {orderBy === field.name ? (
                      <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>)

              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {pipe(

            orderBy ? A.sort(getOrdByField(model)({ name: orderBy, order: order }))(values) : values,
            A.mapWithIndex((i, rowValue) => <TableRow key={i} className={classes.tableBodyRow}>
              {pipe(
                names,
                A.mapWithIndex((j, name) => <TableCell className={classes.tableCell}
                 key={j} align={isNumberType(getField(model)(name)) ? 'right' : 'left'}>


                  {getTFieldValue(model)(rowValue)({ field: name, type: 'value' ,short:(media==='xs' ||media==='sm')})}
                </TableCell>
                )
              )}
            </TableRow>


            ))}
        </TableBody>
      </Table>
    </div>
  );
}


export default ModelTable