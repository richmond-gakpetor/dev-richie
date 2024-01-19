import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="h-screen ">
      <Sidebar className="hidden lg:overflow-x-hidden w-full lg:fixed lg:top-0 max-w-[20rem] lg:block " />
      <main className="h-full lg:ml-[20rem] ">
        <Content />
      </main>
    </div>
  );
};

export default Wrapper;
