import * as React from "react";
import SearchExperience from "./search/SearchExperience";
import NewSearchExperience from "./search/NewSearchExperience";
import { twMerge } from "tailwind-merge";
// import Header from "./header";
import Header from "./TwHeader";
import AppProvider from "./providers/AppProvider";

type Props = {
  children?: React.ReactNode;
  header?: boolean;
  containerCss?: string;
  verticalKey?: string;
  hideLocationPicker?: boolean;
};

const NewPageLayout = ({
  children,
  header = true,
  containerCss,
  verticalKey,
  hideLocationPicker,
}: Props) => {
  return (
  <>
    <NewSearchExperience verticalKey={verticalKey}>
      <AppProvider>
        <div className="min-h-screen font-primary">
          {header && <Header hideLocationPicker={hideLocationPicker} />}
          <div
            className={twMerge(
              "mx-auto max-w-screen-xl px-5 md:px-14" +
                // `${hideLocationPicker ? " pt-16" : ""}`,
                containerCss
            )}
          >
            {children}
          </div>
        </div>
      </AppProvider>
    </NewSearchExperience>
    
  </>

  );
};

export default NewPageLayout;
