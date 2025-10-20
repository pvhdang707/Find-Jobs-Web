import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";
const Testimonials = () => {
  return (
    <div className=" mt-2 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">
        What <span className="text-bright-sun-400">User </span> Says About Us
      </div>
      <div className="flex gap-3 justify-evenly">
      {
          testimonials.map((testimonial, index) => (
            <div className="flex flex-col p-3 gap-3 w-[23%] rounded-xl border border-bright-sun-400 rounded-lg p-3">
            <div className="flex gap-2 items-center">
              <Avatar className="!h-16 !w-16" src="avatar.png" alt="it's me" />
                <div>
                    <div className="text-lg text-mine-shaft-100 font-semibold">{testimonial.name}</div>
                    <Rating value={testimonial.rating} readOnly />
                </div>
            </div>
            <div className="text-xs text-mine-shaft-300">{testimonial.testimonial}</div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Testimonials;
