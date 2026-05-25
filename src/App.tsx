import "./App.scss"

function App() {
  return (
    <main className="thank-you-page" aria-labelledby="thank-you-title">
      <section className="thank-you-card">
        <p className="eyebrow">Thank you</p>
        <h1 id="thank-you-title">
          정락준 <span aria-label="heart">❤️</span> 강한숙
        </h1>
        <p className="message">축하해주셔서 감사합니다.</p>
      </section>
    </main>
  )
}

export default App
