import { satoshiBlack } from "@/components/utils/font";

const black = satoshiBlack.className;
interface Props {
  text: string;
}

const Heading = (props: Props) => {
  const { text } = props;

  return (
    <div className="relative">
      <h1
        className={`${black} stroked absolute text-6xl w-full -top-2 left-0 -z-10 line-clamp-1 tracking-wide md:text-8xl md:-top-10`}
      >
        #{text}
      </h1>
      <h1 className={`${black}  text-[2.7rem] md:text-6xl`}>{text}</h1>
    </div>
  );
};

export default Heading;
