import {
  Thumb,
  MainTitle,
  FeaturesList,
  FeatureTitle,
  FeatureText,
} from './CompanyText.styled';

const CompanyText = () => {
  return (
    <Thumb>
      <MainTitle>Explore the World with Our Car Rental Services</MainTitle>
      <FeatureText>
        At Car Rental Services, we're your gateway to limitless adventures. Our
        car rental services are designed to empower your travel experiences.
        Whether you're embarking on a road trip, a family vacation, or a
        business journey, we've got you covered.
      </FeatureText>
      <h2>Why Choose Us:</h2>
      <FeaturesList>
        <li>
          <FeatureTitle>Versatile Fleet:</FeatureTitle>
          <FeatureText>
            Take your pick from our diverse fleet of meticulously maintained
            vehicles. From compact cars to spacious SUVs and everything in
            between, we have the perfect ride for every occasion.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Convenient Locations:</FeatureTitle>
          <FeatureText>
            With strategically located rental stations, you can effortlessly
            pick up or drop off your vehicle. We're where you need us, ensuring
            a hassle-free rental process.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Competitive Pricing:</FeatureTitle>
          <FeatureText>
            Enjoy transparent and competitive pricing with no hidden surprises.
            Our flexible rental options cater to your schedule and budget,
            offering daily, weekly, and monthly rates.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Exceptional Service:</FeatureTitle>
          <FeatureText>
            Our dedicated team is committed to delivering top-notch customer
            service. From reservation to return, we're here to assist you,
            making your rental experience seamless and enjoyable.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Safety First:</FeatureTitle>
          <FeatureText>
            Your safety is paramount. Our vehicles undergo regular maintenance
            and rigorous safety checks, providing peace of mind during your
            journey.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Customization Options:</FeatureTitle>
          <FeatureText>
            Tailor your rental with our range of extras and add-ons, including
            GPS navigation, child seats, and more, to enhance your comfort.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Online Booking:</FeatureTitle>
          <FeatureText>
            Conveniently reserve your vehicle through our user-friendly online
            platform, giving you the freedom to plan your trip at your own pace.
          </FeatureText>
        </li>
        <li>
          <FeatureTitle>Corporate Solutions:</FeatureTitle>
          <FeatureText>
            We offer specialized solutions for corporate clients, including
            business accounts, long-term rentals, and custom corporate travel
            packages.
          </FeatureText>
        </li>
      </FeaturesList>
    </Thumb>
  );
};

export default CompanyText;
