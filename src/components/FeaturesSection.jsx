import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Real-Time Threat Detection",
      points: [
        "Intrusions",
        "Firearms & Sharp Objects",
        "Human Falls",
        "Unusual or Aggressive Motion",
      ],
    },
    {
      title: "On-Device Intelligence",
      points: [
        "No cloud dependency",
        "Faster alerts",
        "Improved security & reliability",
      ],
    },
    {
      title: "Privacy by Design",
      points: ["No external servers", "Full control of your data"],
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-yellow-400">
              {feature.title}
            </h3>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
              {feature.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
