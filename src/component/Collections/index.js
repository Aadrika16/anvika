import './index.css';

const collections = [
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold necklace on soft brown fabric',
  },
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant gold earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Layered gold necklace on a jewellery bust',
  },
  {
    name: 'Bangles',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold bangle with a delicate floral detail',
  },
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Emerald ring on satin fabric',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Layered gold necklace on a jewellery bust',
  },
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Emerald ring on satin fabric',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold necklace on soft brown fabric',
  },
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant gold earrings',
  },
  {
    name: 'Bangles',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold bangle with a delicate floral detail',
  },
];

function Collections() {
  return (
    <section className="collections" id="collections" aria-labelledby="collections-title">
      <div className="collections__heading">
        <p className="collections__eyebrow"><span />Curated with care<span /></p>
        <h2 id="collections-title">Our Collections</h2>
      </div>
      <div className="collections__grid">
        {collections.map((collection, index) => (
          <a
            className={`collection-card ${index === 7 ? 'is-featured' : ''}`}
            href={`#${collection.name.toLowerCase()}`}
            key={`${collection.name}-${index}`}
          >
            <span className="collection-card__image">
              <img src={collection.image} alt={collection.alt} loading="lazy" />
            </span>
            <span className="collection-card__name">{collection.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Collections;
