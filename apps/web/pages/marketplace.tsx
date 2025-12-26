type Listing = {
  project_type: string;
  country: string;
  standard: string;
  vintage: number;
  qty: number;
  ask_price: number;
  rating_grade: string;
  suggested_price: number;
};

const listings: Listing[] = [
  {
    project_type: "Reforestation",
    country: "Brazil",
    standard: "VCS",
    vintage: 2021,
    qty: 1200,
    ask_price: 14.5,
    rating_grade: "A",
    suggested_price: 13.8,
  },
  {
    project_type: "Renewable Energy",
    country: "India",
    standard: "Gold Standard",
    vintage: 2020,
    qty: 850,
    ask_price: 12.0,
    rating_grade: "B+",
    suggested_price: 11.4,
  },
  {
    project_type: "Cookstoves",
    country: "Kenya",
    standard: "Verra",
    vintage: 2019,
    qty: 1500,
    ask_price: 9.75,
    rating_grade: "A-",
    suggested_price: 10.1,
  },
];

export default function Marketplace() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1>Marketplace</h1>
      <p>Mock listings for initial MVP.</p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {listings.map((listing) => (
          <section
            key={`${listing.project_type}-${listing.country}-${listing.vintage}`}
            style={{
              border: "1px solid #e2e2e2",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <h2>{listing.project_type}</h2>
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              <li>Country: {listing.country}</li>
              <li>Standard: {listing.standard}</li>
              <li>Vintage: {listing.vintage}</li>
              <li>Quantity: {listing.qty}</li>
              <li>Ask Price: ${listing.ask_price}</li>
              <li>Rating Grade: {listing.rating_grade}</li>
              <li>Suggested Price: ${listing.suggested_price}</li>
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
