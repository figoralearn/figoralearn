export default function Team() {
  const teamMembers = [
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-blue-500" },
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-green-500" },
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-red-500" },
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-purple-500" },
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-orange-500" },
    { name: "JYOTSNA VARKEY", role: "Figora", color: "bg-teal-500" },
  ];

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`p-4 ${member.color} text-center text-white`}
        >
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
