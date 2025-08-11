export default function Features() {
  const data = [
    { title: "Speed", text: "Launch your project quickly with Tailwind CSS." },
    { title: "Responsive", text: "Mobile-first design out of the box." },
    { title: "Customizable", text: "Tailor the design to fit your hackathon theme." },
  ];

  return (
    <section id="features" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
