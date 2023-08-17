import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Register = () => {
  return (
    <section className="min-h-screen p-10 flex flex-col justify-center items-center gap-5">
      <h1>Sign Up</h1>

      <form className="flex flex-col gap-4 w-full max-w-96">
        <div className="flex text-sm">
          <label
            htmlFor="username"
            className="p-2 bg-cyan-600 rounded-s-lg w-4/12 text-cyan-100 font-bold text-center"
          >
            Full Name
          </label>
          <Input
            id="username"
            extraStyles={"shadow-pref rounded-e-lg w-8/12"}
          />
        </div>
        <div className="flex text-sm">
          <label
            htmlFor="email"
            className="p-2 bg-cyan-600 rounded-s-lg w-4/12 text-cyan-100 font-bold text-center"
          >
            Email
          </label>
          <Input
            id="email"
            extraStyles={"shadow-pref rounded-e-lg w-8/12"}
          />
        </div>

        <div className="flex text-sm">
          <label
            htmlFor="password"
            className="p-2 w-4/12 rounded-s-lg bg-cyan-600 text-cyan-100 font-bold text-center"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            extraStyles={"shadow-pref rounded-e-lg w-8/12"}
          />
        </div>

        <div className="flex text-sm">
          <Input
            type="password"
            id="password"
            ariaLabel={"Confirm Password"}
            placeholder={"Confirm Password"}
            extraStyles={"shadow-pref rounded-lg w-full"}
          />
        </div>

        <div className="flex text-sm">
          <label
            htmlFor="phone-number"
            className="p-2 bg-cyan-600 rounded-s-lg w-4/12 text-cyan-100 font-bold text-center"
          >
            Phone No
          </label>
          <Input
            id="phone-number"
            extraStyles={"shadow-pref rounded-e-lg w-8/12"}
          />
        </div>

        <div className="flex text-sm">
          <label
            htmlFor="address"
            className="p-2 bg-cyan-600 rounded-s-lg w-4/12 text-cyan-100 font-bold text-center"
          >
            Address
          </label>
          <Input
            id="address"
            extraStyles={"shadow-pref rounded-e-lg w-8/12"}
          />
        </div>

        <div className="flex text-sm gap-6">
          <div className="flex gap-2">
            <label
              htmlFor="male"
              className="p-2 bg-cyan-600 rounded-s-lg text-cyan-100 font-bold text-center"
            >
              Male
            </label>
            <Input
              id="male"
              type="radio"
              name={"gender"}
              extraStyles={"shadow-pref rounded-e-lg accent-cyan-500"}
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="female"
              className="p-2 bg-cyan-600 rounded-s-lg text-cyan-100 font-bold text-center"
            >
              Female
            </label>
            <Input
              id="female"
              name={"gender"}
              type="radio"
              extraStyles={"shadow-pref rounded-e-lg accent-cyan-500"}
            />
          </div>
        </div>

        <Button
          text={"Sign Up"}
          extraStyles={"bg-cyan-900 mt-5"}
        />
      </form>
    </section>
  );
};

export default Register;
