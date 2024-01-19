import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="h-screen ">
      <Sidebar className="hidden md:overflow-x-hidden w-full md:fixed md:top-0 max-w-[20rem] md:block " />
      <main className="h-full md:ml-[20rem] ">
        <Content />
      </main>
    </div>
  );
};

export default Wrapper;
