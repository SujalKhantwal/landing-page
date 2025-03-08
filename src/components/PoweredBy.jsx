export default function PoweredBy() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#E4875D] px-4 md:px-10 py-10 mb-20">
            {/* Powered by text */}
            <div className="w-full text-white text-center font-[Helvetica Neue] font-bold text-4xl leading-tight tracking-tight">
                Perfected by
            </div>

            {/* Responsive company names */}
            <div className="mt-5 text-white font-[Helvetica Neue] font-medium w-full grid grid-cols-2 gap-4 sm:gap-10 md:flex md:justify-between">
                {/* On small screens, these two names will be bigger and take full width */}
                <span className="text-center text-4xl sm:text-3xl font-bold pl-5 md:pl-0">gen next</span>
                <span className="text-center text-4xl sm:text-3xl font-bold">agora</span>

                {/* Hidden on small screens, visible on larger screens */}
                <span className="hidden md:inline text-4xl">azuga</span>
                <span className="hidden md:inline text-4xl">ignition+</span>
                <span className="hidden md:inline text-4xl pr-5 md:pr-0">ens</span>
            </div>
        </div>
    );
}

