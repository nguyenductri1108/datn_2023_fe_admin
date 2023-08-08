import React from 'react';

import ChakraInput from './ChakraInput';

type Props = {
  control: string;
  type: string;
  label: string;
  name: string;
  class?: string;
};

const FormikControl: any = (props: Props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <ChakraInput {...rest} />;
    case 'textarea':
      return null;
    case 'select':
      return null;
    case 'radio':
      return null;
    case 'checkbox':
      return null;
    case 'date':
      return null;
    default:
      return null;
  }
};

export default FormikControl;
