import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div>
        <div className="hero min-h-screen bg-[url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')] bg-cover bg-center bg-no-repeat px-4 pt-10 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8">
          <div className="hero-overlay"></div>
          <div className="text-neutral-content flex h-full w-full items-center gap-1 p-1 text-left">
            <div className="max-w-md pl-8">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button className="bg-success">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// isolation: isolate;
//     display: flex;
//     max-width: 80rem /* 1280px */;
//     align-items: center;
//     justify-content: center;
//     gap: calc(0.25rem /* 4px */ * 4) /* 1rem = 16px */;
//     padding: calc(0.25rem /* 4px */ * 4) /* 1rem = 16px *
