import SectionWrapper from '../Common/SectionWrapper.jsx';
import SectionCard from '../Common/SectionCard.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Education() {
  return (
    <SectionWrapper id="education" title={portfolioData.educationSectionTitle}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioData.education.map((item) => (
          <SectionCard
            key={`${item.degree}-${item.institution}`}
            title={item.degree}
            subtitle={item.institution}
            details={[item.date, item.score]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
