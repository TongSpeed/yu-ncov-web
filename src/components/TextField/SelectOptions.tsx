import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
const getSelections = (items: Array<{ id: string, title: string }> | false | undefined): React.ReactNodeArray | React.ReactNode => {
    return ((items && items.length > 0) ? items.map(option => <MenuItem key={option.id} value={option.id}>
        {option.title}
    </MenuItem>) :
        <MenuItem key={"none"} value={undefined}>
            {"没有记录"}
        </MenuItem>)
}
export default getSelections

