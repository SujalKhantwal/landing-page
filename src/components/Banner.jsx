export default function Banner() {
    return (
        <div className="flex flex-col items-center md:items-start bg-gradient-to-r from-[#FFBF84] via-[#F2A370] to-[#E4875D] px-4 md:px-10 py-10 mb-20">
            {/* All three lines with white outline */}
            {["Videos", "Brand", "Website"].map((text, index) => (
                <h1 
                    key={text}
                    className={`flex text-[64px] font-bold leading-tight ${
                        index === 0 ? 'md:self-start' : 
                        index === 1 ? 'md:self-center' : 'md:self-end'
                    } px-4`}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBF84] via-[#F2A370] to-[#E4875D] [-webkit-text-stroke:2px_white]">
                        Your
                    </span>
                    <span className="text-white font-bold ml-2">{text}</span>
                </h1>
            ))}
        </div>
    );
}