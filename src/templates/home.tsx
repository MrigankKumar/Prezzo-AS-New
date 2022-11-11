import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
  TemplateConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import Site from "../types/Site";
import CoverPhotoHero from "../components/CoverPhotoHero";
import BeverageCarousel from "../components/BeverageCarousel";
import { v4 as uuid } from "uuid";
import CategoryTile from "../components/CategoryTile";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    fields: [
      "name",
      "c_menusRelated.name",
      "c_menusRelated.slug",
      "c_menusRelated.photoGallery",
      "c_menusRelated.c_allergence",
      "c_menusRelated.c_foodType",
    ],
    filter: {
      entityTypes: ["ce_relatedMenuItems"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Menus Listing",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const getPath: GetPath<TemplateProps> = () => {
  return "/homePage";
};

const Home: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { photoGallery, c_menusRelated } = document;

  return (
    <>
      <PageLayout>
        <div className="mx-auto max-w-screen-xl px-5 py-8 md:px-14">
          <div>
            <div className="pb-4 text-2xl font-extrabold text-dark-orange">
              Explore
            </div>
            <div className="flex px-4">
              <CategoryTile title="Our Best Menus" slug="/menuItems" titleCss="text-2xl" />
              <CategoryTile title="Our Answer Search" slug="/Search" titleCss="text-2xl" />
              <CategoryTile title="Our Restaurants" slug="/location-search" titleCss="text-2xl" />
            </div>
          </div>
          {c_menusRelated &&
            c_menusRelated.map((collection) => (
              // console.log(collection.slug,"Collection"),
              <BeverageCarousel
                key={uuid()}
                title={collection.name}
                beverages={collection.slug}
                limit={8}
                imgUrl = {collection.photoGallery[0].image.url}
                viewAllLink={collection.slug}
              />
            ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
