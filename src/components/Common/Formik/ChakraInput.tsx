import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { Field } from 'formik';
import React from 'react';

type Props = {
  type: string;
  label: string;
  name: string;
  class?: string;
};

const ChakraInput: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form }: any) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
