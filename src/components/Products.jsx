export default function Products() {
  const products = ['Industrial Chemicals', 'Lab Reagents', 'Specialty Additives']
  return (
    <section className="section products">
      <div className="glass-card">
        <h2>Products</h2>
        <ul className="list">
          {products.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
