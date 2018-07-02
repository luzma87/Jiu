import React from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../util/constants';
import moment from 'moment';

export default ({ label, id, student, onChange, openToYearSelection, noMaxDate }) => {
  return (
    <DatePicker
      openToYearSelection={openToYearSelection}
      id={id}
      label={label}
      value={student.getValue(id)}
      error={student.hasError(id)}
      helperText={student.getError(id)}
      maxDate={noMaxDate ? moment().add(2, 'months') : moment()}
      clearable={noMaxDate}
      margin="normal"
      className="full"
      format={constants.dateFormat}
      invalidLabel=""
      leftArrowIcon={<FontAwesomeIcon icon={['far', 'caret-left']} />}
      rightArrowIcon={<FontAwesomeIcon icon={['far', 'caret-right']} />}
      onChange={(date) => onChange(id, date)}
    />
  );
}
