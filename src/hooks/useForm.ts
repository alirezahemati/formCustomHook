import { ChangeEvent, FormEvent, useRef, useState } from "react";
import _ from "lodash";

interface FormFields {
  [key: string]: string;
}

interface FormProps {
  initialValues: FormFields;
  onSubmit: (data: FormFields) => void;
}

const useForm = ({ initialValues, onSubmit }: FormProps) => {
  const [formValues, setFormValues] = useState<FormFields>(initialValues);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);
    const newFormValues: FormFields = {};
    formData.forEach((value, key) => {
      newFormValues[key] = value as string;
    });
    const mergedFormValues = _.merge({}, formValues, newFormValues);
    onSubmit(mergedFormValues);
  };

  return {
    formRef,
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
