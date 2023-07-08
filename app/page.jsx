import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center  red_gradient">
        {" "}
        ZEDA Prompt
        <br className="max-md:hidden" />
        <span className="text-center red_gradient"> AI</span>
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> APPLICATION</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern digital world
        to discover, create and share creative ideas and news
      </p>
      {/* FEED */}
      <Feed />
    </section>
  );
};

export default Home;
