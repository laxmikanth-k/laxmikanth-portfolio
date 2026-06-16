import SectionWrapper from '../Common/SectionWrapper.jsx';
import SectionCard from '../Common/SectionCard.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title={portfolioData.achievementsSectionTitle}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioData.achievements.map((item) => (
          <SectionCard
            key={item.title}
            title={item.title}
            details={[item.description]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
