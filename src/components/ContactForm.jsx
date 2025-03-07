export default function ContactForm() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 min-h-screen">
            {/* Left Side - Text & Image (Hidden on Small Screens) */}
            <div className="flex-1 flex flex-col items-start text-center md:text-left">
                <h1 className="font-[Helvetica Neue] text-[32px] md:text-[42px] leading-[40px] md:leading-[52px] tracking-[-1.5px]">
                    See how your videos can make your business <span className="text-[#E4875D]">more $$$</span>
                </h1>
                {/* Image Hidden on Small Screens */}
                <img 
                    src="/male.png" 
                    alt="Smiling man pointing" 
                    className="hidden md:block w-full max-w-[500px] object-contain mt-4"
                />
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-full md:max-w-[500px] w-full">
                <h3 className="text-lg font-semibold mb-4">Take the Full Media+ Tour</h3>

                <label className="text-sm font-medium">Business email</label>
                <input 
                    type="email" 
                    placeholder="johnsmith@hublio.com" 
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                />

                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex-1">
                        <label className="text-sm font-medium">First Name</label>
                        <input 
                            type="text" 
                            placeholder="John" 
                            className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-sm font-medium">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="Smith" 
                            className="w-full border border-gray-300 rounded-md p-2 mb-4"
                        />
                    </div>
                </div>

                <label className="text-sm font-medium">Company name</label>
                <input 
                    type="text" 
                    placeholder="Business Company Name" 
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                />

                <label className="text-sm font-medium">Phone</label>
                <input 
                    type="text" 
                    placeholder="(201) 555-0123" 
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                />

                {/* Checkbox */}
                <div className="flex items-start gap-2 text-sm mb-4">
                    <input type="checkbox" className="mt-1" />
                    <p>
                        I agree to Hublio’s <span className="text-[#E4875D] underline">Terms of Service</span> and 
                        <span className="text-[#E4875D] underline"> Privacy Policy</span>.
                    </p>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#E4875D] text-white font-medium py-2 rounded-md cursor-pointer">
                    Get a free demo
                </button>
            </div>
        </div>
    );
}
