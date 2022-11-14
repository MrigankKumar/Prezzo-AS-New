import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import * as React from "react";
import searchConfig from "../../config/searchConfig";

interface NewSearchExperienceProps {
  verticalKey?: string;
  children?: React.ReactNode;
  headlessId?: string;
}

const NewSearchExperience = ({
  verticalKey = "offers",
  children,
  headlessId,
}: NewSearchExperienceProps) => {
  const searcher = provideHeadless({
    ...searchConfig,
    verticalKey: verticalKey,
  });
  return (
    <SearchHeadlessProvider
      searcher={searcher}
      // {...searchConfig}
      // verticalKey={verticalKey}
      // headlessId={headlessId}
    >
      <StateManager>{children}</StateManager>
    </SearchHeadlessProvider>
  );
};

const StateManager = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default NewSearchExperience;
