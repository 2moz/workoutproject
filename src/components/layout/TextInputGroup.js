import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  errors
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};
TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string
};
export default TextInputGroup;
