import React from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../util/constants';
import moment from 'moment';

export default ({ label, id, domainObject, onChange, openToYearSelection, noMaxDate, value = null, hasError = null, helperText = null }) => {
  const fieldValue = domainObject ? domainObject.getValue(id) : value;
  const fieldHasError = domainObject ? domainObject.hasError(id) : hasError;
  const fieldHelperText = domainObject ? domainObject.getError(id) : helperText;
  return (
    <DatePicker
      openToYearSelection={openToYearSelection}
      id={id}
      label={label}
      value={fieldValue}
      error={fieldHasError}
      helperText={fieldHelperText}
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
