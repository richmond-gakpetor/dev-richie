import ContactLinks from "@/components/ContactLinks";
import ProjectDetails from "@/components/project/ProjectDetails";
import Container from "@/components/ui/Container";
import { satoshiMedium } from "@/components/utils/font";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const page = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);

  return (
    <>
      <header className="flex gap-4 p-4 items-center text-sm px-2">
        <Link href="/#apps" className="flex gap-1">
          <IoChevronBack className="cursor-pointer" size={20} />
        </Link>
        <p>
          Apps / <span className={`${satoshiMedium.className}`}>{id}</span>
        </p>

        <ContactLinks className="ml-auto" />
      </header>

      <Container className="max-w-2xl pb-16">
        <ProjectDetails project={id} />
      </Container>
    </>
  );
};

export default page;
