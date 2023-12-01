import ProjectDetails from "@/components/project/ProjectDetails";
import Modal from "@/components/ui/Modal";

interface Props {
  params: { id: string };
}

const page = (props: Props) => {
  const {
    params: { id },
  } = props;
  return (
    <Modal>
      <ProjectDetails project={id} />
    </Modal>
  );
};

export default page;
