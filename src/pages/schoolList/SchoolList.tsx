import "./SchoolList.css";

const schoolsData = [
  { name: "Pallavi Aware School", distance: "0.85 KM", rating: 0, address: "16-1-11/1A, Survey No. 37 & 40, Bairamalguda, Saroornagar, 500035" },
  { name: "Gowtham World School", distance: "0.88 KM", rating: 1, address: "Plot No. 5, Road No. 3, Venkateswara Colony, Saroornagar, 500035" },
  { name: "Lotus National School", distance: "1.63 KM", rating: 0, address: "Gautham Nagar Near Doctors Colony, Koti Cheruvu, Mulugu Road, 506011" },
  { name: "Vidyanjali Grammar School", distance: "1.80 KM", rating: 1, address: "H.No.9/3/6 Doctors Colony, L.B.Nagar, 500041" },
  { name: "Sanskriti The School", distance: "1.81 KM", rating: 0, address: "23-70/2, Netaji Nagar, Saroornagar, 500035" },
  { name: "Panineeya Mahavidyalaya Public School", distance: "1.99 KM", rating: 0, address: "Vivekananda Nagar, Dilsukhnagar, 500060" },
  { name: "G Pulla Reddy Memorial School", distance: "2.15 KM", rating: 0, address: "Address not provided" },
];

const SchoolList = () => {
  return (
    <>
      <div className="container">
        <div className="schools-list">
          <div className="filters">
            <h4>Filter by Board</h4>
            <ul>
              <li><input type="checkbox" /> CISCE</li>
              <li><input type="checkbox" /> CBSE</li>
              <li><input type="checkbox" /> BSEAP</li>
              <li><input type="checkbox" /> BSEB</li>
              <li><input type="checkbox" /> DBSE</li>
            </ul>

            <h4>Filter by Medium</h4>
            <ul>
              <li><input type="checkbox" /> English</li>
              <li><input type="checkbox" /> Hindi</li>
              <li><input type="checkbox" /> Bengali</li>
              <li><input type="checkbox" /> Assamese</li>
            </ul>

            <h4>Distance</h4>
            <input type="range" min="0" max="10" step="0.5" />
          </div>

          <div className="schools">
            {schoolsData.map((school, index) => (
              <div className="school-card" key={index}>
                <h5>{school.name}</h5>
                <p>{school.address}</p>
                <div className="school-info">
                  <span>{school.distance}</span>
                  <div className="rating">
                    {Array(5).fill().map((_, i) => (
                      <span key={i} className={i < school.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolList;
