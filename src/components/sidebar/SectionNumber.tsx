import { useSectionContext } from "@/context/SectionContext";

const SectionNumber = () => {
  const { currentSection } = useSectionContext();

  const id = String(currentSection.id).padStart(2, "0").split("").join(" ");

  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="border-l-[1px] border-light h-20"></div>

      <p className="border border-light grid place-items-center w-14 h-14 rounded-[100%] opacity-100 ">
        <span className="text-primary transition-all ease-in-out duration-300">
          {id}
        </span>
      </p>

      <div className="border-l-[1px] border-light h-20"></div>
    </div>
  );
};

export default SectionNumber;
