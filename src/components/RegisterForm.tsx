import useForm from "../hooks/useForm";
import Input from "./shared/Input";

export default function RegisterForm({ onSubmitForm }: RegisterFormProps) {
  const initialFormValues: FormFields = {
    firstName: "Alireza",
    lastName: "Hemati",
    email: "Alirezahemati73@outlook.com",
    password: "",
  };

  const { formRef, formValues, handleChange, handleSubmit } = useForm({
    initialValues: initialFormValues,
    onSubmit: (data) => {
      onSubmitForm(data);
    },
  });

  return (
    <>
      <h1 className="text-4xl font-bold">Register</h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-slate-800 px-8 py-12 w-full max-w-[400px] rounded"
      >
        {/* First Name */}
        <div className="w-full">
          <Input
            id="firstName"
            name="firstName"
            labelText="First Name"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="w-full">
          <Input
            id="lastName"
            name="lastName"
            labelText="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        {/* // ! UserName / Uncontrolled input */}
        <div className="w-full">
          <Input
            id="userName"
            name="userName"
            labelText="UserName"
            required={false}
          />
        </div>
        {/* Email */}
        <div className="w-full">
          <Input
            type="email"
            id="email"
            name="email"
            labelText="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div className="w-full">
          <Input
            type="password"
            id="password"
            name="password"
            labelText="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-100 text-black hover:bg-slate-600 hover:text-white transition-colors font-semibold capitalize p-2 rounded mt-4"
        >
          Register
        </button>
      </form>
    </>
  );
}
