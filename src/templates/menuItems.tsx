import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import PageLayout from "../components/PageLayout";
import "../index.css";
import StaticMap from "../components/map/StaticMap";
import { ComplexImageType } from "@yext/pages/components";
import { Image } from "@yext/pages/components";
import Location, { Coordinate, Day } from "../types/locations";
import Hours, { sortByDay } from "../components/Hours";
import Breadcrumbs from "../components/Breadcrumbs";
import Site from "../types/Site";
import BeverageCarousel from "../components/BeverageCarousel";
import { v4 as uuid } from "uuid";

export const config: TemplateConfig = {
  stream: {
    $id: "menuItems",
    fields: [
      "id",
      "name",
      "photoGallery",
      "shortDescription",
      "slug",
      "c_allergence",
      "c_foodType",
    ],
    filter: {
      entityTypes: ["ce_menuItems"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug.toString()}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: `Prezzo | ${document.name}`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.shortDescription,
        },
      },
      {
        type: "meta",
        attributes: {
          title: `Prezzo | ${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name : "robots",
          content: "nofollow, noindex",
        },
      },
    ],
  };
};

// create a type that is a combination of Location and Site
const MenuItemsTemplate: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const {
    name,
    slug,
   photoGallery,
   shortDescription,
   c_allergence,
   c_foodType,
    _site,
  } = document as LocationWithSite;

  const coverPhoto: ComplexImageType | undefined = photoGallery?.[0];

  return (
    <>
      <PageLayout>
        <div className="py-4">
         {/* <Breadcrumbs
            currentPage={address.line1}
            links={[{ name: "Locations", slug: "/locations" }]}
          />*/}
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
          <a href="/">
            {coverPhoto && (
              <Image className="min-h-[400px]" image={coverPhoto} />
            )}
          </a>
          <div className="div flex flex-col py-2 md:py-8">
            <div className="mb-4 ">
              <div className="">{slug}</div>
              {/*<p className="text-3xl font-bold text-dark-orange">
                {address.line1}
              </p>*/}
            </div>
            {/*<div className="mb-4">
              <p className="">{address.line1}</p>
              <p className="font-bold text-black">
                {address.city}, {address.region}, {address.postalCode}{" "}
              </p>
            </div>*/}
            {/*<p>{renderCurrentStatus()}</p>*/}
            {/*<div className="mt-auto flex gap-4 py-4">
              <a
                href={getGoogleMapsLink(yextDisplayCoordinate)}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" rounded-md border border-dark-orange px-4 py-2 text-dark-orange hover:bg-dark-orange hover:text-white">
                  Get Directions
                </div>
              </a>
              <a href="/locations">
                <div className=" rounded-md border border-dark-orange px-4 py-2 text-dark-orange hover:bg-dark-orange hover:text-white">
                  Find Another Location
                </div>
              </a>
            </div>*/}
          </div>
          <div className="flex flex-col bg-light-orange p-2 ">
            <div className="mb-4 text-xl font-semibold">Store Details</div>
            <div>
              
            </div>
            {/* TODO: stream data from KG */}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default MenuItemsTemplate;
