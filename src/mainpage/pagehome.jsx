export default function PageHome() {
    const popularCountries = [
        {
            name: "United States",
            flag: "🇺🇸",
        },
        {
            name: "Canada",
            flag: "🇨🇦",
        },
        {
            name: "United Kingdom",
            flag: "🇬🇧",
        },
        {
            name: "Australia",
            flag: "🇦🇺",
        },
        {
            name: "Germany",
            flag: "🇩🇪",
        },
    ];

    return (
        <div className="p-4 bg-blue-400">
            <section className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Welcome to WorldUniversity</h1>
                <p className="text-lg">
                    Explore the world's universities, learn about different countries, and find the best place for your higher education.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Our Fiture</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
                    <div className="bg-white p-4 rounded hover:shadow-lg transition duration-300 text-center">Search Country</div>
                    <div className="bg-white p-4 rounded hover:shadow-lg transition duration-300 text-center">Filter Country</div>
                    <div className="bg-white p-4 rounded hover:shadow-lg transition duration-300 text-center">Detail Country</div>
            
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Popular Countries</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {popularCountries.map((country, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
                            <p className="text-3xl">{country.flag}</p>
                            <h3 className="text-xl mt-2 font-medium">{country.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
