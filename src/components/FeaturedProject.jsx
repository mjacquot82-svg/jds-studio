import SectionHeader from './SectionHeader.jsx';

function FeaturedProject() {
  return (
    <section id="featured-project" className="section section-shell project-section">
      <div className="project-layout reveal">
        <SectionHeader eyebrow="Featured project" title="It's On The Fridge">
          A custom online ordering platform that allows customers to create personalized
          refrigerator magnets using their own photos before placing an order.
        </SectionHeader>
        <div className="project-panel" aria-label="Project workflow preview">
          <div className="project-toolbar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="magnet-preview">
            <div className="photo-frame"></div>
            <div className="magnet-details">
              <span>Upload photo</span>
              <span>Crop magnet</span>
              <span>Place order</span>
            </div>
          </div>
          <div className="project-stats">
            <span>Personalized design</span>
            <span>Customer checkout</span>
            <span>Order workflow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
