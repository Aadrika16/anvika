import './index.css';

function SignaturePiece() {
  return (
    <section className="signature-piece" id="signature-piece" aria-labelledby="signature-piece-title">
      <img
        className="signature-piece__image"
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2400&q=90"
        alt="Statement green and gold necklace resting on rich rust silk"
        loading="lazy"
      />
      <div className="signature-piece__shade" />
      <div className="signature-piece__content">
        <p className="signature-piece__eyebrow"><span />The signature piece<span /></p>
        <h2 id="signature-piece-title">Celebrate Softly,<br />Shine Fully</h2>
        <a className="signature-piece__button" href="#collections">
          Shop now <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}

export default SignaturePiece;
