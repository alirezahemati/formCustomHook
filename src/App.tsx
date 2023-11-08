import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const onSubmit = (userData: User) => {
    setUser(userData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 bg-slate-900 text-white">
      {user?.firstName ? (
        <h2 className="text-4xl capitalize font-semibold w-full max-w-[600px] truncate text-center leading-loose">
          &#128075;Hello Dear, {user?.userName} {user.firstName}
        </h2>
      ) : (
        <RegisterForm onSubmitForm={onSubmit} />
      )}
    </div>
  );
}

export default App;
