import { Button, TextInput } from "@mantine/core";
const Subcribe = () => {
  return (
    <div className=" mt-20 pb-5 flex items-center justify-evenly  bg-mine-shaft-900 mx-20 py-3 rounded-xl">
      <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
        Never want to miss any{" "}
        <span className="text-bright-sun-400"> Jobs </span>{" "}
      </div>

      <div className=" flex items-center gap-4 bg-mine-shaft-700 px-3 py-2 rounded-lg p-1 px-2">
        <TextInput
          placeholder="Enter your email"
          variant="unstyled"
          size="xl"
          className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
        />
        <Button
          size="lg"
          color="brightSun.4"
          variant="filled"
          className="bg-bright-sun-400 text-mine-shaft-100"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subcribe;
