export default function SectionWithVideo() {
    return (
        <div className="flex flex-col items-center text-center px-6 py-12">
            <div className="max-w-2xl">
                <header>
                    <h5 className="text-orange-500 font-semibold text-lg">With Media+</h5>
                    <h1 className="text-3xl font-bold mt-2">Create an OTT platform for your media</h1>
                </header>
                <p className="text-gray-600 mt-4">
                    Let your videos do more than just sit on your website. Curate your video repository in a few easy steps
                    and let it drive organic views and generate leads.
                </p>
            </div>
            <div className="mt-8 w-full max-w-5xl shadow-lg rounded-xl overflow-hidden border">
                <video
                    className="w-full h-auto"
                    controls
                    src="/-a9ee-4c3f-aedd-c9a4ec560647.mp4"
                />
            </div>
        </div>
    );
}