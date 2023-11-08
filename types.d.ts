type InputProps = {
  id: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  type?: string;
  labelText: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type FormFields = {
  [key: string]: string;
};

type User = {
  [key: string]: string;
};

type RegisterFormProps = {
  onSubmitForm: (data: User) => void;
};
