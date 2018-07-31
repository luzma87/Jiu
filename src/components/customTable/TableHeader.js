import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CustomTableCell from './CustomTableCell';

class TableHeader extends React.Component {
  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, columnData } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell style={{ padding: 0 }}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </CustomTableCell>
          {columnData.map(column => (
            <CustomTableCell
              key={column.id}
              sortDirection={orderBy === column.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={() => this.props.onRequestSort(column.id)}
                  style={{ width: column.width, minWidth: column.minWidth}}
                >
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </CustomTableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
}

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columnData: PropTypes.array,
};

export default withTheme()(TableHeader);
