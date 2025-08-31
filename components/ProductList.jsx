import { memo } from "react";
import { CardHeading, Description, Header, Heading } from "./Headings";

// Reusable ProductList component
export const ProductList = memo(({ ProductList }) => (
  <div className="space-y-8">
    <Header
      alignment="responsive"
      className="text-center mx-auto lg:!text-left"
    >
      <Heading className="!text-primary lg:!text-4xl sm:!text-2xl md:!text-3xl">
        {ProductList?.productTitle}
      </Heading>
    </Header>
    {ProductList?.details.map((product, index) => (
      <div key={index}>
        <Header
          alignment="responsive"
          spacing="tight"
          className="text-center mx-auto lg:!text-left"
        >
          <CardHeading className="!text-primary">{product.name}</CardHeading>
          <Description>{product.description}</Description>
        </Header>
      </div>
    ))}
  </div>
));
