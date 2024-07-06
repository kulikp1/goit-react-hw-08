import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import css from './PhoneInput.module.css'

export default function PhoneInputField (props) {
  const {
    field: { name, value },
    form: { setFieldValue },
    country = 'UA',
    onChange = null,
  } = props;

  const onValueChange = phoneNumber => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <div>
          <PhoneInput
              className={css.phoneInput}
        placeholder="Enter phone number"
        name={name}
        value={value}
        onChange={onValueChange}
        country={country}
        defaultCountry="UA"
      />
    </div>
  );
};
