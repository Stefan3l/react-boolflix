import LogIn from "../Login/Login";

export default function HomePage() {
  return (
    <section className="bg-black ">
      <div className="container mx-auto bg-black h-screen flex justify-center items-center ">
        <div className="flex-col">
          <h1 className="ms-title text-red-600 text-center text-8xl font-semibold">
            BoolFlix
          </h1>
          <LogIn />
        </div>
      </div>
    </section>
  );
}
