import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../util/constants';
import CustomTableCell from '../customTable/CustomTableCell';

class StudentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { student, isSelected, theme, handleClick } = this.props;

    return (
      <TableRow
        hover
        role="checkbox"
        key={student.id}
        tabIndex={-1}
        selected={isSelected}
        onClick={() => handleClick(student.id)}
      >
        <TableCell style={{ padding: 0 }}>
          <Checkbox checked={isSelected} />
        </TableCell>
        <CustomTableCell
          component="th"
          scope="row"
        >
          {student.firstName} {student.lastName}
        </CustomTableCell>
        <CustomTableCell>{constants.formatDate(student.registrationDate)}</CustomTableCell>
        <CustomTableCell>{constants.formatDate(student.enrollmentDate)}</CustomTableCell>
        <CustomTableCell>{student.rank.description}</CustomTableCell>
        <CustomTableCell>{student.methodOfPayment.description}</CustomTableCell>
        <CustomTableCell>
          {student.isActive ?
           <FontAwesomeIcon
             icon={['far', 'toggle-on']}
             style={{ color: theme.palette.primary.main }}
           /> :
           <FontAwesomeIcon
             icon={['far', 'toggle-off']}
             style={{ color: theme.palette.secondary.main }}
           />}
        </CustomTableCell>
      </TableRow>
    );
  }
}

StudentRow.propTypes = {
  student: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withTheme()(StudentRow);
