import { useWindowSize } from "react-use";
const Tagline = () => {
  const { width } = useWindowSize();

  if (width < 650) {
    return (
      <div className="moving-text text-center text-3xl mt-20 text-[var(--secondary-color)] font-[Montserrat]">
        #Ideate_Innovate_Incubate_Your_Dreams.
      </div>
    );
  } else {
    return (
      <div className="text-center text-3xl mt-10 text-[var(--secondary-color)] font-[Montserrat]">
        #Ideate_Innovate_Incubate_Your_Dreams.
      </div>
    );
  }
};

export default Tagline;
