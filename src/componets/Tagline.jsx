import { useWindowSize } from "react-use";
const Tagline = () => {
  const { width } = useWindowSize();

  if (width < 650) {
    return (
      <div className="text-center text-3xl -mt-[100vh] text-[var(--secondary-color)] font-[Montserrat]">
        <marquee>#Ideate_Innovate_Incubate_Your_Dreams.</marquee>
      </div>
    );
  } else {
    return (
      <div className="text-center text-3xl -mt-[100vh] text-[var(--secondary-color)] font-[Montserrat]">
        #Ideate_Innovate_Incubate_Your_Dreams.
      </div>
    );
  }
};

export default Tagline;
