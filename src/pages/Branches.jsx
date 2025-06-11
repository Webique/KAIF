import "./Branches.css";

const branches = [
  {
    name: "Al Sahafa",
    address: "Al Thoumamah Rd, As Sahafah, Riyadh 13315",
    link: "https://www.google.com/maps/place/KAIF+tea/@24.7927089,46.6489723,17z",
  },
  {
    name: "Al Qirawan",
    address: "King Fahd Rd, Al Qirawan, Riyadh 13534",
    link: "https://www.google.com/maps/place/KAIF+tea/@24.8530823,46.6001186,17z",
  },
  {
    name: "Al Malqa",
    address: "6776 وادي وج،, Al Malqa, Riyadh 13524",
    link: "https://www.google.com/maps/place/KAIF+tea/@24.8095227,46.6128494,17z",
  },
  {
    name: "Al Rawdah",
    address: "Hafsah Bint Omar, Ar Rawdah, Riyadh 13211",
    link: "https://www.google.com/maps/place/24%C2%B043'24.1%22N+46%C2%B045'32.2%22E/@24.72336,46.758941,17z",
  },
  {
    name: "Arakah",
    address: "Prince Mishaal bin Abdulaziz, Arqiyah, Riyadh 12534",
    link: "https://www.google.com/maps/place/شاهي+كايف%E2%80%AD/@24.6878669,46.5861823,17z",
  },
  {
    name: "Al Ghat Governorate",
    address: "شارع الملك فيصل بن عبدالعزيز, Al Ghat 15723",
    link: "https://www.google.com/maps/place/شاهي+كايف%E2%80%AD/@26.0529242,44.9977949,17z",
  },
];

export default function Branches() {
  return (
    <div className="branches-container">
      <h1 className="branches-title">Our Branches</h1>
      <p className="branches-subtitle">
        Explore our locations and visit the branch nearest to you.
      </p>

      <div className="branches-grid">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <img
              src="/images/loc-removebg-preview.png"
              alt={`Location ${branch.name}`}
              className="branch-image"
            />
            <h3 className="branch-name">{branch.name}</h3>
            <p className="branch-address">{branch.address}</p>
            <a
              href={branch.link}
              target="_blank"
              rel="noreferrer"
              className="branch-button"
            >
              View Location
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
