import './index.css';

function Story() {
  return (
    <section className="story" id="about" aria-labelledby="story-title">
      <div className="story__media-frame">
        <img
          className="story__image"
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85"
          alt="Woman wearing traditional fine jewellery beside a palace lake"
          loading="lazy"
        />
      </div>
      <div className="story__content">
        <p className="story__eyebrow"><span />The Anvika story<span /></p>
        <h2 id="story-title">Heritage, worn lightly</h2>
        <div className="story__copy">
          <p>
            Anvika began in Hyderabad with a simple belief — that jewellery should carry a story before it carries a price. Our artisans work in the old traditions of Polki setting and Kundan layering, the same craft that once dressed haveli courtyards and palace corridors.
          </p>
          <p>
            What leaves our workshop is deliberately modern: lighter, wearable, made for the woman who moves between a boardroom and a wedding mandap in the same week. Every commission is handcrafted, and every piece is meant to be handed down.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
