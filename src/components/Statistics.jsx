import Card from "./Card";

export default function Statistics() {
    return (
        <div className="w-full flex flex-col items-center text-center mt-32 px-6">
            <header className="text-center max-w-[994px]">
                <h3 className="font-sans font-bold text-[24px] leading-[24.16px] tracking-[-3%] text-[#E4875D]">
                    Elevate your video strategy
                </h3>
                <h1 className="font-sans font-medium text-[42px] leading-[50.4px] tracking-[-1.5%] text-[#333132]">
                    Seamless Video Management
                </h1>
            </header>
            <p className="max-w-[786px] font-sans font-light text-[20px] leading-[30px] text-[#444444] mt-4">
                Transform how you engage with your audience using Media+
            </p>
            
            {/* Cards section - Stack in small screens, row in medium+ */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-10 bg-white w-full">
                <Card stats="2.5X" topic="Lead Generation" description="Boost watch time and drive more leads" />
                <Card stats="3X" topic="Publish Content Faster with AI" description="Tailor made to get more views" />
                <Card stats="30min" topic="Setup" description="Set up your video CMS in less than 30 minutes" />
            </div>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-5 mb-10">
                Request a Demo
            </button>
        </div>
    );
}
