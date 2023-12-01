import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="h-screen ">
      {/* <Sidebar className="hidden md:fixed md:top-0 md:w-4/12 xl:w-3/12 md:block bg-lime-900" /> */}
      <Sidebar className="hidden md:overflow-x-hidden w-full md:fixed md:top-0 max-w-[20rem] md:block " />

      {/* <main className="h-full md:w-8/12  md:mr-0 md:ml-auto bg-emerald-900"> */}
      <main className="h-full md:ml-[20rem] ">
        <Content />
      </main>
    </div>
  );
};

export default Wrapper;
