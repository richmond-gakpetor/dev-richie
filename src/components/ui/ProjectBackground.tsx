import Container from "@/components/ui/Container";

interface Props {
  children: React.ReactNode;
}

const ProjectBackground = (props: Props) => {
  return (
    <div className="bg-[#202020] h-screen">
      <Container>{props.children}</Container>
    </div>
  );
};

export default ProjectBackground;
