import React, { useState } from 'react';
import { SectionTitle } from '../Value/Value.element';
import {
  Container,
  Image,
  Job,
  Name,
  SectionTeam,
  Teams,
} from './Team.element';
import { teams } from '../../../assets/data/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ItemsCarousel from 'react-items-carousel';

const Team = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <SectionTeam id='our-team'>
      <Container>
        <SectionTitle>Our Team</SectionTitle>

        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<FaChevronLeft />}
          rightChevron={<FaChevronRight />}
          outsideChevron
          chevronWidth={chevronWidth}
          infiniteLoop
        >
          {teams.map(({ name, job, img }, idx) => (
            <Teams key={idx}>
              <Image src={img} alt={name} />

              <Name>{name}</Name>
              <Job>{job}</Job>
            </Teams>
          ))}
        </ItemsCarousel>
      </Container>
    </SectionTeam>
  );
};

export default Team;
