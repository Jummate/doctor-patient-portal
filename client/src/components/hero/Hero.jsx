import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('C:\ProgrammingProject\ReactProject\doctor-patient-portal\client\src\components\hero\hero-img.jpg')] bg-no-repeat bg-cover relative font-sans">
      <div className="min-h-screen w-full backdrop-brightness-[0.3] text-white flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl md:text-3xl">Welcome</h1>
        <h1 className="text-2xl md:text-3xl">to</h1>
        <h1 className="text-2xl md:text-3xl">Doctor-Patient Portal</h1>

        <Button
          text="Get Started"
          extraStyles="mt-10"
        />
      </div>
    </div>
  );
};

export default Hero;
