import Image from "next/image";
import { ArrownRightIcon, MessageSquareQuote } from "./Icons";
import { Description, Header, Heading, SubHeading } from "./Headings";
import { Badge } from "./Badge";
import Link from "next/link";

export default function ProductTypeCard({ ProductTypes = [] }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 space-y-4">
      <Header>
        <SubHeading>{ProductTypes?.subHeading || ""}</SubHeading>
        <Heading className="!text-primary">
          {ProductTypes?.heading || ""}
        </Heading>
        <Description className="!text-textcolor">
          {ProductTypes?.description || ""}
        </Description>
      </Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {ProductTypes?.details.map((type, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer h-full flex flex-col"
          >
            <div className="relative overflow-hidden rounded-t-2xl h-72 w-full">
              <Image
                src={type?.image || "/placeholder.svg"}
                alt={type?.name || "UPS Type"}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <Badge variant="rental">Rental</Badge>
                <Badge variant="purchase">Purchase</Badge>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Link
                  href={`/en/${type.link}/${(type?.name || "ups")
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  View More Details
                </Link>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="border-b mb-4">
                <Header alignment="left">
                  <SubHeading className="!text-primary !my-2">
                    {type?.name || "UPS Type"}
                  </SubHeading>
                  <Description className="!text-textcolor !mt-2 !mb-4 line-clamp-2">
                    {type?.description || "No description available."}
                  </Description>
                </Header>
              </div>

              <div className="flex-grow mb-4">
                <h4 className="font-medium mb-2 text-primary">
                  Key Applications:
                </h4>
                <ul className="space-y-1 mb-4">
                  {type.applications?.slice(0, 4).map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <ArrownRightIcon />
                      <span className="text-sm text-textcolor">{app}</span>
                    </li>
                  ))}
                </ul>

                {type.features && (
                  <>
                    <h4 className="font-medium mb-2 text-primary">Features:</h4>
                    <ul className="space-y-1 mb-4">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <ArrownRightIcon />
                          <span className="text-sm text-textcolor">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {type.specifications && (
                  <>
                    <h4 className="font-medium mb-2 text-primary">
                      Available Specifications:
                    </h4>
                    <div className="space-y-2">
                      {type.specifications.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className="text-sm p-2 bg-light rounded-md"
                        >
                          <span className="font-medium">{spec.capacity}</span>
                          <span className="text-muted-foreground">
                            {" "}
                            - {spec.dimensions}, {spec.weight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {/* Request a Quote Button */}
                <div className="mt-auto pt-3 border-t">
                  <Link
                    href={`/contact`}
                    className="flex items-center justify-center w-full bg-transparent  text-primary border border-primary mt-4 py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    <MessageSquareQuote className="h-4 w-4 mr-2" />
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
