import React, {useState} from 'react';
const useForm = (intialValue) => {
  const [form, setForm] = useState(intialValue);

  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(intialValue);
      }

      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
