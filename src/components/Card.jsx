export default function Card({ stats, topic, description }) {
    return (
        <div className="w-[380px] h-[356px] mt-[62px] rounded-[24px] p-6 shadow-lg 
                        bg-gradient-to-b from-[#FDF6F4] to-[#FFDDCF] text-white flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold bg-gradient-to-b from-[#E4875D] to-[#FFCBB4] bg-clip-text text-transparent">{stats}</h2>
            <h1 className="font-sans font-medium text-[36px] leading-[39.6px] tracking-[-1.5px] text-center mt-4 text-[#E4875D]">
                {topic}
            </h1>
            <p className="font-sans font-light text-[20px] leading-[30px] text-center mt-2 text-black">
                {description}
            </p>
        </div>
    );
}
