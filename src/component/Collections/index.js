import './index.css';

const collections = [
  {
    name: 'Necklaces',
    image: '/collections/necklace_01.webp',
    alt: 'Gold necklace on soft brown fabric',
  },
  {
    name: 'Earrings',
    image: '/collections/earrings_02.webp',
    alt: 'Elegant gold earrings',
  },
  {
    name: 'Necklaces',
    image: '/collections/necklace_03.webp',
    alt: 'Layered gold necklace on a jewellery bust',
  },
  {
    name: 'Bangles',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Gold bangle with a delicate floral detail',
  },
  {
    name: 'Rings',
    image: '/collections/ring_05.webp',
    alt: 'Emerald ring on satin fabric',
  },
  {
    name: 'Necklaces',
    image: '/collections/necklace_03.webp',
    alt: 'Layered gold necklace on a jewellery bust',
  },
  {
    name: 'Rings',
    image: '/collections/bracelet_04.webp',
    alt: 'Emerald ring on satin fabric',
  },
  {
    name: 'Necklaces',
    image: '/collections/necklace_01.webp',
    alt: 'Gold necklace on soft brown fabric',
  },
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant gold earrings',
  },
  {
    name: 'Bangles',
    image: '/collections/bracelet_04.webp',
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
      <div className="collections__viewport">
        <div className="collections__grid">
          {[...collections, ...collections].map((collection, index) => (
            <a
              className={`collection-card ${index % collections.length === 7 ? 'is-featured' : ''}`}
              href={`#${collection.name.toLowerCase()}`}
              key={`${collection.name}-${index}`}
              aria-hidden={index >= collections.length}
              tabIndex={index >= collections.length ? -1 : undefined}
            >
              <span className="collection-card__image">
                <img src={collection.image} alt={collection.alt} loading="lazy" />
              </span>
              <span className="collection-card__name">{collection.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
