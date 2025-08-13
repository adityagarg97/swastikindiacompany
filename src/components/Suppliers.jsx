export default function Suppliers() {
  const suppliers = ['Acme Corp', 'Global Chemicals', 'Eastern Traders']
  return (
    <section className="section suppliers">
      <div className="glass-card">
        <h2>Our Suppliers</h2>
        <ul className="list">
          {suppliers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
