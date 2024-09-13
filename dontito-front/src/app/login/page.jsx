import LoginForm from "./components/loginForm";

export default function Page() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/Tractor.png)' }}>
      <LoginForm />
    </div>
  );
}
