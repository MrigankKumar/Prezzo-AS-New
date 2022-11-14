import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { SearchBar, UniversalResults } from '@yext/answers-react-components';
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";

export const getPath: GetPath<TemplateProps> = (props) => {
  return "/newUniversal";
};


const config = {
  apiKey: '0745b6f8f27964f9a65150a0824f9c81',
  experienceKey: 'prezzo-answer-experience',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
   sessionTrackingEnabled: true,
  endpoints: {
    universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
  }
}

function App() {
  return (
    <AnswersHeadlessProvider {...config}>
      <SearchBar />
      <UniversalResults />
    </AnswersHeadlessProvider>
  );
}

export default App;