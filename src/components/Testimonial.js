const Testimonial = () => {
  return (
    <section className="mt-12 min-h-full pb-20 relative bg-gradient-to-tr from-orange-400 to-pink-600">
      <div className="flex flex-col">
        <div className="container mx-auto flex absolute inset-x-0 -top-[20px] justify-center">
          <h1 className="text-3xl font-semibold items-center self-center">
            Testimonial
          </h1>
        </div>
      </div>
      <div className="px-5 mx-3">
        <div className="flex flex-col items-center">
          <img
            src="/images/sethedited.png"
            alt="client"
            className="w-1/3 self-center mt-10 md:w-32  lg:w-52"
          />
          <div className="pt-3 flex flex-col items-center space-y-2 w-full justify-center md:w-2/3 lg:w-1/3">
            <p className="font-semibold">Seth Ayao</p>
            <span className="italic font-normal">- multimedia artist</span>
            <p className="sm:w-full italic font-normal ">
              “Mark is awesome. He's open to suggestions and very easy to work
              with. Not to mention he's adept and attentive to details and
              things you wanted do with your website. He completely gets what I
              want and what I need”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
