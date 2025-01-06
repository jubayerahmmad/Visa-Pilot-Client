import { MdOutlineMail } from "react-icons/md";

const NewsletterForm = () => {
  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-12 rounded-lg bg-gradient-to-br dark:from-gray-700 dark:via-slate-700 dark:to-gray-950 from-[#fffbfb] via-[#d0f3fc] to-blue-200 font-montserrat">
        <h1 className="text-3xl sm:text-5xl w-full sm:w-[60%] dark:text-white">
          Subscibe to Our Newsletter
        </h1>

        <div className="w-full 1260px:flex-row flex-col flex items-start mt-4 justify-between gap-[30px]">
          <p className="text-[0.9rem] text-gray-400">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>

          <form
            action="https://getform.io/f/amddekob"
            method="POST"
            className="relative mb-6 w-full sm:w-[80%]"
          >
            <input
              className="py-3 pr-4 pl-12 w-full outline-none"
              placeholder="Email Address"
              name="email"
            />
            <MdOutlineMail className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]" />

            <button className="absolute bottom-[-20px] right-[-8px] bg-[#161819] hover:bg-[#161819] text-white py-2 px-5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
