# Changelog

All notable changes to this project will be documented in this file.

## [2.5.1] (2021-02-17)

#### New Features

- `client`
  - [#812](https://github.com/Amsterdam/vergunningcheck/pull/812) Improved accessibility and readability to comply with WCAG ([@robinpiets](https://github.com/robinpiets))
- `client`, `imtr`
  - [#784](https://github.com/Amsterdam/vergunningcheck/pull/784) Checker "fire safety" ([@robinpiets](https://github.com/robinpiets))

#### Bug fixes

- `client`
  - [#813](https://github.com/Amsterdam/vergunningcheck/pull/813) Prevent a bug when refreshing a checker without getDataNeed ([@robinpiets](https://github.com/robinpiets))

#### Chores

- `client`
  - [#785](https://github.com/Amsterdam/vergunningcheck/pull/785) Added tests and translation for Location components ([@robinpiets](https://github.com/robinpiets))

#### Committers: 2

- Robin Piets ([@robinpiets](https://github.com/robinpiets))
- Sven Jens ([@svenjens](https://github.com/svenjens))

## [2.5.0] (2021-02-04)

#### New Features

- `client`, `graphql`, `imtr-client`, `imtr`
  - [#758](https://github.com/Amsterdam/vergunningcheck/pull/758) Section components in isolation and general refactor ([@robinpiets](https://github.com/robinpiets))
- `client`, `imtr-client`
  - [#461](https://github.com/Amsterdam/vergunningcheck/pull/461) React-hooks and Typescript refactor of Context's ([@afjlambert](https://github.com/afjlambert))

#### Bug fixes

- `client`
  - [#792](https://github.com/Amsterdam/vergunningcheck/pull/792) Fixed bugs switching between checkers ([@robinpiets](https://github.com/robinpiets))
  - [#711](https://github.com/Amsterdam/vergunningcheck/pull/711) The houseNumberFull input can now be used with spaces between characters ([@svenjens](https://github.com/svenjens))
  - [#801](https://github.com/Amsterdam/vergunningcheck/pull/801) Fixed regex bug on Safari ([@svenjens](https://github.com/svenjens))

#### Hot fixes

- `client`
  - [#801](https://github.com/Amsterdam/vergunningcheck/pull/801) Fixed regex bug on Safari ([@svenjens](https://github.com/svenjens))
  - [#805](https://github.com/Amsterdam/vergunningcheck/pull/805) Hotfix: reset address triggers wrong checker.next ([@robinpiets](https://github.com/robinpiets))

#### Chores

- `client`
  - [#772](https://github.com/Amsterdam/vergunningcheck/pull/772) Added missing tests ([@svenjens](https://github.com/svenjens))
  - [#773](https://github.com/Amsterdam/vergunningcheck/pull/773) Created link for new checker ([@robinpiets](https://github.com/robinpiets))
  - [#732](https://github.com/Amsterdam/vergunningcheck/pull/732) Replaced instances of Conclusion to Outcome ([@robinpiets](https://github.com/robinpiets))
  - [#766](https://github.com/Amsterdam/vergunningcheck/pull/766) Implement consistent id's for imtr-files ([@afjlambert](https://github.com/afjlambert))
- `e2e`, `graphql`
  - [#759](https://github.com/Amsterdam/vergunningcheck/pull/759) Updated dependencies ([@robinpiets](https://github.com/robinpiets))

## [2.4.2] (2020-12-16)

#### New Features

- `client`, `imtr-client`, `imtr`
  - [#696](https://github.com/Amsterdam/vergunningcheck/pull/696) Checker "demolition" with new outcomes and ordering ([@robinpiets](https://github.com/robinpiets))

#### Bug fixes

- `client`
  - [#728](https://github.com/Amsterdam/vergunningcheck/pull/728) Bugs: Incorrect loading state and incorrect alert show. ([@svenjens](https://github.com/svenjens))

#### Chores

- `client`
  - [#701](https://github.com/Amsterdam/vergunningcheck/pull/701) Added intro text translations to tests ([@svenjens](https://github.com/svenjens))
  - [#773](https://github.com/Amsterdam/vergunningcheck/pull/773) Created link for new checker ([@robinpiets](https://github.com/robinpiets))

## [2.4.1] (2020-11-25)

#### New Features

- `client`, `graphql`
  - [#685](https://github.com/Amsterdam/vergunningcheck/pull/685) Added Matomo events for `neighborhood` and `district` ([@svenjens](https://github.com/svenjens))

#### Chores

- `e2e`
  - [#679](https://github.com/Amsterdam/vergunningcheck/pull/679) Update todo's and add a test ([@afjlambert](https://github.com/afjlambert))

#### Documentation changes

- [#698](https://github.com/Amsterdam/vergunningcheck/pull/698) Added Automated tests part to contributing ([@robinpiets](https://github.com/robinpiets))

## [2.4.0] (2020-11-11)

#### New Features

- `client`, `e2e`, `imtr-client`
  - [#661](https://github.com/Amsterdam/vergunningcheck/pull/661) Update Conclusion with Outcome and new Disclaimer ([@robinpiets](https://github.com/robinpiets))
- `client`
  - [#667](https://github.com/Amsterdam/vergunningcheck/pull/667) feat: Implemented i18n-next poc ([@svenjens](https://github.com/svenjens))
  - [#651](https://github.com/Amsterdam/vergunningcheck/pull/651) Added new Titles and refactored some pages ([@robinpiets](https://github.com/robinpiets))

#### Chores

- `client`, `imtr-client`
  - [#682](https://github.com/Amsterdam/vergunningcheck/pull/682) export getChecker as named function instead of default export ([@afjlambert](https://github.com/afjlambert))
- `client`
  - [#681](https://github.com/Amsterdam/vergunningcheck/pull/681) Improve flow-types ([@afjlambert](https://github.com/afjlambert))
  - [#672](https://github.com/Amsterdam/vergunningcheck/pull/672) Fixed inconsistencies: TS issues, docs and a URL cleaner ([@robinpiets](https://github.com/robinpiets))
  - [#658](https://github.com/Amsterdam/vergunningcheck/pull/658) TypeScripted and tested Link and MarkDown ([@robinpiets](https://github.com/robinpiets))
  - [#655](https://github.com/Amsterdam/vergunningcheck/pull/655) Typescript Functions refactor ([@robinpiets](https://github.com/robinpiets))
  - [#660](https://github.com/Amsterdam/vergunningcheck/pull/660) TypeScripted Footer and Layout ([@robinpiets](https://github.com/robinpiets))
  - [#659](https://github.com/Amsterdam/vergunningcheck/pull/659) Updated client packages ([@robinpiets](https://github.com/robinpiets))
  - [#657](https://github.com/Amsterdam/vergunningcheck/pull/657) TypeScripted all atoms and atoms tests ([@robinpiets](https://github.com/robinpiets))
- `imtr`
  - [#680](https://github.com/Amsterdam/vergunningcheck/pull/680) Add comment for sorting keys ([@afjlambert](https://github.com/afjlambert))
- `client`, `imtr-client`, `mocking`
  - [#670](https://github.com/Amsterdam/vergunningcheck/pull/670) TypeScripted Questions + Question ([@robinpiets](https://github.com/robinpiets))
- `client`, `e2e`, `graphql`, `imtr-client`, `imtr`, `mocking`
  - [#643](https://github.com/Amsterdam/vergunningcheck/pull/643) IMTR Client in Typescript and GraphQL integration testing ([@afjlambert](https://github.com/afjlambert))

## [2.3.0] (2020-10-27)

#### New Features

- `client`
  - [#649](https://github.com/Amsterdam/vergunningcheck/pull/649) Refactored Location components and fixed the tests ([@robinpiets](https://github.com/robinpiets))
  - [#641](https://github.com/Amsterdam/vergunningcheck/pull/641) Upgraded components and added tests ([@robinpiets](https://github.com/robinpiets))
  - [#640](https://github.com/Amsterdam/vergunningcheck/pull/640) Adjusted the link in the Conclusion component ([@svenjens](https://github.com/svenjens))
  - [#639](https://github.com/Amsterdam/vergunningcheck/pull/639) Removed old OLO Intro files and added tests ([@robinpiets](https://github.com/robinpiets))
  - [#635](https://github.com/Amsterdam/vergunningcheck/pull/635) Textual and styling changes after the test ([@robinpiets](https://github.com/robinpiets))
  - [#632](https://github.com/Amsterdam/vergunningcheck/pull/632) OLO flow textual changes ([@svenjens](https://github.com/svenjens))
  - [#627](https://github.com/Amsterdam/vergunningcheck/pull/627) Added extra conclusion information for `need permit` ([@svenjens](https://github.com/svenjens))
  - [#626](https://github.com/Amsterdam/vergunningcheck/pull/626) Textual changes to the OLO Flow ([@svenjens](https://github.com/svenjens))
  - [#617](https://github.com/Amsterdam/vergunningcheck/pull/617) Separated the OLO flow and refactored components ([@robinpiets](https://github.com/robinpiets))
  - [#616](https://github.com/Amsterdam/vergunningcheck/pull/616) Wrapped (new) Debug Variables in Accordion ([@robinpiets](https://github.com/robinpiets))
- `client`, `e2e`, `mocking`
  - [#638](https://github.com/Amsterdam/vergunningcheck/pull/638) Added e2e tests and refactored the e2e config ([@robinpiets](https://github.com/robinpiets))
- `client`, `e2e`
  - [#630](https://github.com/Amsterdam/vergunningcheck/pull/630) Skip the intro page on the OLO flow ([@robinpiets](https://github.com/robinpiets))
- `client`, `e2e`, `graphql`, `imtr`, `mocking`
  - [#610](https://github.com/Amsterdam/vergunningcheck/pull/610) Implement shared mocking package and renamed apps-folder ([@afjlambert](https://github.com/afjlambert))
- Other
  - [#614](https://github.com/Amsterdam/vergunningcheck/pull/614) Added matomo events for GraphQL errors and Restrictions ([@svenjens](https://github.com/svenjens))

#### Bug fixes

- `client`
  - [#637](https://github.com/Amsterdam/vergunningcheck/pull/637) OLO flow bug when going directly to Location Results component ([@svenjens](https://github.com/svenjens))
  - [#634](https://github.com/Amsterdam/vergunningcheck/pull/634) Disable autoFocus when `postalCode` has been found ([@robinpiets](https://github.com/robinpiets))

#### Chores

- `client`
  - [#625](https://github.com/Amsterdam/vergunningcheck/pull/625) Upgrade react to v16.14 ([@afjlambert](https://github.com/afjlambert))
- `e2e`, `mocking`
  - [#618](https://github.com/Amsterdam/vergunningcheck/pull/618) Fixed e2e for multiple addresses on multiple flows ([@robinpiets](https://github.com/robinpiets))

## [2.2.0] (2020-10-19)

#### New Features

- [#552](https://github.com/Amsterdam/vergunningcheck/pull/552) The new Location redesign ([@robinpiets](https://github.com/robinpiets))
- [#611](https://github.com/Amsterdam/vergunningcheck/pull/611) Fixed titles, styling and tests for RegistryLookupSummary ([@robinpiets](https://github.com/robinpiets))
- [#608](https://github.com/Amsterdam/vergunningcheck/pull/608) Debug Table are TS-ed and in Accordion ([@robinpiets](https://github.com/robinpiets))
- [#603](https://github.com/Amsterdam/vergunningcheck/pull/603) Converted utils to TypeScript and refactored ([@robinpiets](https://github.com/robinpiets))
- [#604](https://github.com/Amsterdam/vergunningcheck/pull/604) General location component refactors ([@robinpiets](https://github.com/robinpiets))
- [#606](https://github.com/Amsterdam/vergunningcheck/pull/606) Removed EditButton from OLO and renamed EditLocationModal ([@robinpiets](https://github.com/robinpiets))
- [#605](https://github.com/Amsterdam/vergunningcheck/pull/605) Debug table git info ([@afjlambert](https://github.com/afjlambert))
- [#602](https://github.com/Amsterdam/vergunningcheck/pull/602) Refactored some utils (added `isValidPostalcode` and tests) ([@robinpiets](https://github.com/robinpiets))
- [#594](https://github.com/Amsterdam/vergunningcheck/pull/594) Updated loading text by replacing the title ([@robinpiets](https://github.com/robinpiets))
- [#592](https://github.com/Amsterdam/vergunningcheck/pull/592) Location e2e test ([@afjlambert](https://github.com/afjlambert))
- [#576](https://github.com/Amsterdam/vergunningcheck/pull/576) Implement cityScape scopes ([@afjlambert](https://github.com/afjlambert))
- [#585](https://github.com/Amsterdam/vergunningcheck/pull/585) Renamed ChangeAddressModal to EditLocation ([@robinpiets](https://github.com/robinpiets))
- [#584](https://github.com/Amsterdam/vergunningcheck/pull/584) Updated Matomo events for the Modals ([@robinpiets](https://github.com/robinpiets))
- [#579](https://github.com/Amsterdam/vergunningcheck/pull/579) Added Matomo events and resetChecker functionality to the Change Address Modal ([@svenjens](https://github.com/svenjens))
- [#581](https://github.com/Amsterdam/vergunningcheck/pull/581) RegisterLookupSummary now is TypeScript ([@robinpiets](https://github.com/robinpiets))
- [#580](https://github.com/Amsterdam/vergunningcheck/pull/580) Fixed bug in debouncing LocationNotFound by moving it to LocationFinder ([@robinpiets](https://github.com/robinpiets))
- [#577](https://github.com/Amsterdam/vergunningcheck/pull/577) Converted LocationInput to TypeScript ([@robinpiets](https://github.com/robinpiets))
- [#575](https://github.com/Amsterdam/vergunningcheck/pull/575) Updated @amsterdam ASC dependencies ([@robinpiets](https://github.com/robinpiets))
- [#574](https://github.com/Amsterdam/vergunningcheck/pull/574) Fixed the edit address button and refactored lots of code ([@robinpiets](https://github.com/robinpiets))
- [#573](https://github.com/Amsterdam/vergunningcheck/pull/573) Disables the native browser auto-suggest ([@robinpiets](https://github.com/robinpiets))
- [#569](https://github.com/Amsterdam/vergunningcheck/pull/569) feat: changed multiple sentences ([@svenjens](https://github.com/svenjens))
- [#571](https://github.com/Amsterdam/vergunningcheck/pull/571) AutoSuggest improvements on focusing, fetching and displaying errors ([@robinpiets](https://github.com/robinpiets))
- [#338](https://github.com/Amsterdam/vergunningcheck/pull/338) IMTR processing refactor ([@afjlambert](https://github.com/afjlambert))
- [#557](https://github.com/Amsterdam/vergunningcheck/pull/557) Added AutoSuggest and Debounce to LocationFinder ([@robinpiets](https://github.com/robinpiets))
- [#558](https://github.com/Amsterdam/vergunningcheck/pull/558) Enabled the disabled test ([@svenjens](https://github.com/svenjens))
- [#556](https://github.com/Amsterdam/vergunningcheck/pull/556) Updated RegisterLookupSummary by new design and improved Location flow ([@svenjens](https://github.com/svenjens))
- [#551](https://github.com/Amsterdam/vergunningcheck/pull/551) Updated the edit button for location and fixed the modal functionality ([@robinpiets](https://github.com/robinpiets))
- [#549](https://github.com/Amsterdam/vergunningcheck/pull/549) Feat: remove location result step ([@svenjens](https://github.com/svenjens))
- [#548](https://github.com/Amsterdam/vergunningcheck/pull/548) Added files for a modal to change address ([@robinpiets](https://github.com/robinpiets))
- [#547](https://github.com/Amsterdam/vergunningcheck/pull/547) Replaced input fields ([@robinpiets](https://github.com/robinpiets))
- [#524](https://github.com/Amsterdam/vergunningcheck/pull/524) Basic setup of e2e-testing with nightwatch and puppeteer ([@afjlambert](https://github.com/afjlambert))

#### Bug fixes

- [#613](https://github.com/Amsterdam/vergunningcheck/pull/613) Fixed bug displaying the Location Summary ([@robinpiets](https://github.com/robinpiets))
- [#612](https://github.com/Amsterdam/vergunningcheck/pull/612) Fixed bug in resetting state ([@robinpiets](https://github.com/robinpiets))
- [#609](https://github.com/Amsterdam/vergunningcheck/pull/609) Gray bullet bug on CheckerPage ([@svenjens](https://github.com/svenjens))
- [#595](https://github.com/Amsterdam/vergunningcheck/pull/595) Fixed bug when showing result that wasn't a true exactMatch ([@robinpiets](https://github.com/robinpiets))
- [#593](https://github.com/Amsterdam/vergunningcheck/pull/593) Fix broken e2e tests ([@robinpiets](https://github.com/robinpiets))
- [#591](https://github.com/Amsterdam/vergunningcheck/pull/591) Reset the autoSuggestValue on each key press to prevent bugs ([@robinpiets](https://github.com/robinpiets))
- [#587](https://github.com/Amsterdam/vergunningcheck/pull/587) Updated location styling and fixed several location bugs ([@robinpiets](https://github.com/robinpiets))
- [#578](https://github.com/Amsterdam/vergunningcheck/pull/578) Fixed bugs by making app backwards compatible ([@robinpiets](https://github.com/robinpiets))
- [#572](https://github.com/Amsterdam/vergunningcheck/pull/572) Fixed a bug incorrect showing the change address modal ([@svenjens](https://github.com/svenjens))
- [#560](https://github.com/Amsterdam/vergunningcheck/pull/560) Fix console warnings and leave the OLO flow the same ([@svenjens](https://github.com/svenjens))
- [#561](https://github.com/Amsterdam/vergunningcheck/pull/561) Do not show back-button at the first question + Only store the address if the address has been found ([@robinpiets](https://github.com/robinpiets))
- [#555](https://github.com/Amsterdam/vergunningcheck/pull/555) Fixed another broken link ([@robinpiets](https://github.com/robinpiets))
- [#554](https://github.com/Amsterdam/vergunningcheck/pull/554) Fixed Link with broken URL in Conclusion and fixed props ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#596](https://github.com/Amsterdam/vergunningcheck/pull/596) LocationFinder to typescript ([@svenjens](https://github.com/svenjens))
- [#590](https://github.com/Amsterdam/vergunningcheck/pull/590) Small design implementation for the DevHomePage ([@robinpiets](https://github.com/robinpiets))
- [#586](https://github.com/Amsterdam/vergunningcheck/pull/586) LocationInput converted to typescript ([@svenjens](https://github.com/svenjens))
- [#583](https://github.com/Amsterdam/vergunningcheck/pull/583) fixed location results test ([@svenjens](https://github.com/svenjens))
- [#582](https://github.com/Amsterdam/vergunningcheck/pull/582) Typescript and tests improvements ([@robinpiets](https://github.com/robinpiets))
- [#562](https://github.com/Amsterdam/vergunningcheck/pull/562) Converted Form to TypeScript and added Test ([@robinpiets](https://github.com/robinpiets))
- [#559](https://github.com/Amsterdam/vergunningcheck/pull/559) Improvements: Conclusion, TypeScript and exports ([@robinpiets](https://github.com/robinpiets))
- [#550](https://github.com/Amsterdam/vergunningcheck/pull/550) Added basic test to Location ([@robinpiets](https://github.com/robinpiets))

## [2.1.0] (2020-09-30)

#### New Features

- [#522](https://github.com/Amsterdam/vergunningcheck/pull/522) The Conclusion redesign ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#537](https://github.com/Amsterdam/vergunningcheck/pull/537) Added unit tests ([@robinpiets](https://github.com/robinpiets))

## [2.0.5] (2020-09-23)

#### New Features

- [#525](https://github.com/Amsterdam/vergunningcheck/pull/525) feat: Enable matamo trackevents ([@svenjens](https://github.com/svenjens))

#### Chores

- [#509](https://github.com/Amsterdam/vergunningcheck/pull/509) Enable npm audit (on graphql) ([@afjlambert](https://github.com/afjlambert))

## [2.0.4] (2020-09-17)

#### Bug fixes

- [#511](https://github.com/Amsterdam/vergunningcheck/pull/511) Redirect to Intro in case no session context has been found ([@robinpiets](https://github.com/robinpiets))
- [#502](https://github.com/Amsterdam/vergunningcheck/pull/502) Replaced div with span to prevent warning ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#485](https://github.com/Amsterdam/vergunningcheck/pull/485) Refactored Nav to TypeScript ([@svenjens](https://github.com/svenjens))
- [#510](https://github.com/Amsterdam/vergunningcheck/pull/510) Updated ASC-UI to fix bug in radio IE11 ([@robinpiets](https://github.com/robinpiets))

## [2.0.3](2020-09-16)

#### Bug fixes

- [#506](https://github.com/Amsterdam/vergunningcheck/pull/506) Fixed OLO flow bug with resetChecker ([@robinpiets](https://github.com/robinpiets))

## [2.0.2](2020-09-16)

#### New Features

- [#439](https://github.com/Amsterdam/vergunningcheck/pull/439) Feature: New Matomo event names + refactor ([@svenjens](https://github.com/svenjens))
- [#482](https://github.com/Amsterdam/vergunningcheck/pull/482) Updated all @datapunt deps and fixed focus styles ([@robinpiets](https://github.com/robinpiets))

#### Bug fixes

- [#496](https://github.com/Amsterdam/vergunningcheck/pull/496) Fixed broken STTR files ([@robinpiets](https://github.com/robinpiets))
- [#501](https://github.com/Amsterdam/vergunningcheck/pull/501) In case no active sections are found, reset the checker ([@robinpiets](https://github.com/robinpiets))
- [#497](https://github.com/Amsterdam/vergunningcheck/pull/497) Bump lint-staged (to prevent `lint-staged: command not found`) ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#500](https://github.com/Amsterdam/vergunningcheck/pull/500) Replace old Footer props to remove deprecated logs ([@robinpiets](https://github.com/robinpiets))
- [#484](https://github.com/Amsterdam/vergunningcheck/pull/484) Make sure netlify does a clean install ([@afjlambert](https://github.com/afjlambert))
- [#487](https://github.com/Amsterdam/vergunningcheck/pull/487) Chore: show app version on DevHomePage ([@robinpiets](https://github.com/robinpiets))
- [#488](https://github.com/Amsterdam/vergunningcheck/pull/488) Implement text change in intro ([@afjlambert](https://github.com/afjlambert))

## [2.0.1](2020-09-10)

#### New Features

- [#480](https://github.com/Amsterdam/vergunningcheck/pull/480) Hide DebugDecisionTable on print ([@robinpiets](https://github.com/robinpiets))
- [#477](https://github.com/Amsterdam/vergunningcheck/pull/477) Hide the print button on ie11 ([@svenjens](https://github.com/svenjens))
- [#473](https://github.com/Amsterdam/vergunningcheck/pull/473) Added Sentry tags for extra logging information ([@svenjens](https://github.com/svenjens))

#### Bug fixes

- [#456](https://github.com/Amsterdam/vergunningcheck/pull/456) postalCode undefined ([@robinpiets](https://github.com/robinpiets))
- [#457](https://github.com/Amsterdam/vergunningcheck/pull/457) `<a>` cannot appear as a descendant of `<a>` ([@robinpiets](https://github.com/robinpiets))
- [#458](https://github.com/Amsterdam/vergunningcheck/pull/458) EditButton on new line gives wrong style ([@robinpiets](https://github.com/robinpiets))

## [2.0.0](2020-09-02)

#### New Features

- [#463](https://github.com/Amsterdam/vergunningcheck/pull/463) Feature: disabled Matomo and replaced all event trackers ([@robinpiets](https://github.com/robinpiets))
- [#414](https://github.com/Amsterdam/vergunningcheck/pull/414) Feature: The Chappie 2.0 redesign ([@robinpiets](https://github.com/robinpiets))
- [#438](https://github.com/Amsterdam/vergunningcheck/pull/438) Feature: Added temporary FormTitle style fix ([@robinpiets](https://github.com/robinpiets))
- [#420](https://github.com/Amsterdam/vergunningcheck/pull/420) Feature: Chappie2.0 intros ([@svenjens](https://github.com/svenjens))
- [#435](https://github.com/Amsterdam/vergunningcheck/pull/435) Feature: Disable all future questions + refactored EditButton.tsx ([@robinpiets](https://github.com/robinpiets))
- [#434](https://github.com/Amsterdam/vergunningcheck/pull/434) Feedback from team: Textual updates, bug fixes and refactor ([@robinpiets](https://github.com/robinpiets))
- [#426](https://github.com/Amsterdam/vergunningcheck/pull/426) Phone number refactor ([@afjlambert](https://github.com/afjlambert))
- [#411](https://github.com/Amsterdam/vergunningcheck/pull/411) Feature: Chappie2.0 route redirects to make old URLs backwards compatible ([@svenjens](https://github.com/svenjens))
- [#424](https://github.com/Amsterdam/vergunningcheck/pull/424) Feature: Added zonwering checker on chappie2.0 ([@robinpiets](https://github.com/robinpiets))
- [#422](https://github.com/Amsterdam/vergunningcheck/pull/422) Feature: Updated page title and path ([@robinpiets](https://github.com/robinpiets))
- [#421](https://github.com/Amsterdam/vergunningcheck/pull/421) Feature: updated Conclusion Alert text ([@robinpiets](https://github.com/robinpiets))
- [#419](https://github.com/Amsterdam/vergunningcheck/pull/419) Features: Text and Styling updates from acceptance-test ([@robinpiets](https://github.com/robinpiets))
- [#417](https://github.com/Amsterdam/vergunningcheck/pull/417) Feature: Updated the margin above the Footer ([@robinpiets](https://github.com/robinpiets))
- [#410](https://github.com/Amsterdam/vergunningcheck/pull/410) Feat: Zonwering updates from UX-test ([@robinpiets](https://github.com/robinpiets))
- [#405](https://github.com/Amsterdam/vergunningcheck/pull/405) Feat: Added the disabled styling of the edit button ([@svenjens](https://github.com/svenjens))
- [#294](https://github.com/Amsterdam/vergunningcheck/pull/294) STTR versioning ([@afjlambert](https://github.com/afjlambert))
- [#402](https://github.com/Amsterdam/vergunningcheck/pull/402) Feature: Added ConclusionAlert for Contact Conclusion ([@robinpiets](https://github.com/robinpiets))
- [#404](https://github.com/Amsterdam/vergunningcheck/pull/404) Feat: Set Conclusion section to active if it needs to be active ([@robinpiets](https://github.com/robinpiets))
- [#394](https://github.com/Amsterdam/vergunningcheck/pull/394) Feature: Show and skip already answered questions ([@robinpiets](https://github.com/robinpiets))
- [#390](https://github.com/Amsterdam/vergunningcheck/pull/390) Feature: Chappie2.0 bug fixes and refactor ([@robinpiets](https://github.com/robinpiets))
- [#389](https://github.com/Amsterdam/vergunningcheck/pull/389) Feat: Fixed flow when Conclusion is displayed, but it shouldn't ([@robinpiets](https://github.com/robinpiets))
- [#353](https://github.com/Amsterdam/vergunningcheck/pull/353) Feature: ApolloClient v3 ([@afjlambert](https://github.com/afjlambert))
- [#386](https://github.com/Amsterdam/vergunningcheck/pull/386) Feat: Refactored PermitAlert and changed color to Yellow ([@robinpiets](https://github.com/robinpiets))
- [#385](https://github.com/Amsterdam/vergunningcheck/pull/385) Feat: Print styling + Refactored QuestionAnswer ([@robinpiets](https://github.com/robinpiets))
- [#379](https://github.com/Amsterdam/vergunningcheck/pull/379) Feature: show alert is question needs permit ([@robinpiets](https://github.com/robinpiets))
- [#383](https://github.com/Amsterdam/vergunningcheck/pull/383) Feat: Re-added the Prev button in Form Navigation ([@robinpiets](https://github.com/robinpiets))
- [#352](https://github.com/Amsterdam/vergunningcheck/pull/352) Feature: Added titles to Olo Flow and refactored the Olo Url ([@robinpiets](https://github.com/robinpiets))
- [#333](https://github.com/Amsterdam/vergunningcheck/pull/333) Feat: Refactor for handling the checker states by functions. And Fix for autofill. ([@svenjens](https://github.com/svenjens))
- [#345](https://github.com/Amsterdam/vergunningcheck/pull/345) Feat: Add lines between StepByStepNavigation Items ([@robinpiets](https://github.com/robinpiets))
- [#337](https://github.com/Amsterdam/vergunningcheck/pull/337) Feat: chappie2.0 reinit checker after location change, and keep question until answer change ([@svenjens](https://github.com/svenjens))
- [#335](https://github.com/Amsterdam/vergunningcheck/pull/335) Feature: Updated layout (mobile, Location and OLO) ([@robinpiets](https://github.com/robinpiets))
- [#332](https://github.com/Amsterdam/vergunningcheck/pull/332) Feature: Added full-width background to Stepper ([@robinpiets](https://github.com/robinpiets))
- [#329](https://github.com/Amsterdam/vergunningcheck/pull/329) Feat: Chappie2.0 progress ([@svenjens](https://github.com/svenjens))
- [#302](https://github.com/Amsterdam/vergunningcheck/pull/302) Feat: Basic stepper component with states ([@svenjens](https://github.com/svenjens))
- [#318](https://github.com/Amsterdam/vergunningcheck/pull/318) Feature: Added step by step navigation WCAG (and refactored) ([@robinpiets](https://github.com/robinpiets))
- [#224](https://github.com/Amsterdam/vergunningcheck/pull/224) Feature: added step by step navigation ([@robinpiets](https://github.com/robinpiets))
- [#225](https://github.com/Amsterdam/vergunningcheck/pull/225) Feature: Question wrapper for chappie 2.0 ([@svenjens](https://github.com/svenjens))
- [#262](https://github.com/Amsterdam/vergunningcheck/pull/262) Remove zoning-plan texts where not applicable ([@afjlambert](https://github.com/afjlambert))

#### Bug fixes

- [#455](https://github.com/Amsterdam/vergunningcheck/pull/455) Bug: Usabilla exit polls ([@robinpiets](https://github.com/robinpiets))
- [#423](https://github.com/Amsterdam/vergunningcheck/pull/423) Bug: Fixed ConclusionAlert styling and refactored some old code ([@robinpiets](https://github.com/robinpiets))
- [#416](https://github.com/Amsterdam/vergunningcheck/pull/416) Bug: Fixed and refactored the flow between Location and Questions ([@svenjens](https://github.com/svenjens))
- [#409](https://github.com/Amsterdam/vergunningcheck/pull/409) Bug: Only be able to go to Conclusion when Questions are finished ([@robinpiets](https://github.com/robinpiets))
- [#408](https://github.com/Amsterdam/vergunningcheck/pull/408) Bug: OLO Flow had issues with routing to CheckerPage ([@robinpiets](https://github.com/robinpiets))
- [#406](https://github.com/Amsterdam/vergunningcheck/pull/406) Bug: Fixed unnecessary line between StepItems ([@robinpiets](https://github.com/robinpiets))
- [#407](https://github.com/Amsterdam/vergunningcheck/pull/407) Bug: Removed whitespace by changing quotes ([@robinpiets](https://github.com/robinpiets))
- [#395](https://github.com/Amsterdam/vergunningcheck/pull/395) Bug: fixed issue with undefined string ([@robinpiets](https://github.com/robinpiets))
- [#392](https://github.com/Amsterdam/vergunningcheck/pull/392) Bug: removed duplicate state change ([@svenjens](https://github.com/svenjens))
- [#388](https://github.com/Amsterdam/vergunningcheck/pull/388) Bug: Show correct conclusion text with Contact conclusion ([@robinpiets](https://github.com/robinpiets))
- [#387](https://github.com/Amsterdam/vergunningcheck/pull/387) Bug: Sentry warning of `substring` undefined ([@robinpiets](https://github.com/robinpiets))
- [#344](https://github.com/Amsterdam/vergunningcheck/pull/344) Bug: Hide unanswered questions + browser refresh bugs + refactor ([@robinpiets](https://github.com/robinpiets))
- [#331](https://github.com/Amsterdam/vergunningcheck/pull/331) Bug fix: IE11 styling issue ([@robinpiets](https://github.com/robinpiets))
- [#317](https://github.com/Amsterdam/vergunningcheck/pull/317) Bug: show caption even though image loading fails ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#462](https://github.com/Amsterdam/vergunningcheck/pull/462) Updated STTR files ([@svenjens](https://github.com/svenjens))
- [#440](https://github.com/Amsterdam/vergunningcheck/pull/440) Chore: PR feedback on chappie2.0 ([@robinpiets](https://github.com/robinpiets))
- [#427](https://github.com/Amsterdam/vergunningcheck/pull/427) Change title and slug for Kozijnen, also add redirect ([@afjlambert](https://github.com/afjlambert))
- [#384](https://github.com/Amsterdam/vergunningcheck/pull/384) chore: Renamed WrapperPage to CheckerPage ([@robinpiets](https://github.com/robinpiets))
- [#348](https://github.com/Amsterdam/vergunningcheck/pull/348) Chore: Refactor the checker.stack.map() function ([@robinpiets](https://github.com/robinpiets))
- [#351](https://github.com/Amsterdam/vergunningcheck/pull/351) Chore: Fixed test for Answers.js ([@robinpiets](https://github.com/robinpiets))
- [#316](https://github.com/Amsterdam/vergunningcheck/pull/316) Chore: Step by step navigation > Fixed tests 100% ([@robinpiets](https://github.com/robinpiets))
- [#268](https://github.com/Amsterdam/vergunningcheck/pull/268) Chore(deps): Bump graphql-tools from 6.0.13 to 6.0.14 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))

#### Documentation changes

- [#368](https://github.com/Amsterdam/vergunningcheck/pull/368) Docs: Update CONTRIBUTING.md ([@robinpiets](https://github.com/robinpiets))

## [1.4.2](2020-08-19)

#### New Features

- [#376](https://github.com/Amsterdam/vergunningcheck/pull/376) NGINX config update: support \* wildcard to allow Sentry and Usabilla ([@robinpiets](https://github.com/robinpiets))
- [#365](https://github.com/Amsterdam/vergunningcheck/pull/365) Temporary disabled the OLO flow for the Zonwering checker ([@robinpiets](https://github.com/robinpiets))
- [#367](https://github.com/Amsterdam/vergunningcheck/pull/367) Feature: Updated NGINX config to fix bugs with Sentry and Usabilla ([@robinpiets](https://github.com/robinpiets))
- [#330](https://github.com/Amsterdam/vergunningcheck/pull/330) Feature: Added zonwering STTR and Intro ([@robinpiets](https://github.com/robinpiets))

#### Bug fixes

- [#363](https://github.com/Amsterdam/vergunningcheck/pull/363) Bug: Helmet no longer supports `true` as a middleware option. ([@robinpiets](https://github.com/robinpiets))
- [#323](https://github.com/Amsterdam/vergunningcheck/pull/323) hotfix: Fix cannot replace of undefined ([@afjlambert](https://github.com/afjlambert))
- [#293](https://github.com/Amsterdam/vergunningcheck/pull/293) Fix: using Memo to stop rerendering Header+Footer ([@robinpiets](https://github.com/robinpiets))
- [#296](https://github.com/Amsterdam/vergunningcheck/pull/296) Fix: Removed unneccesary chappie2.0 files ([@robinpiets](https://github.com/robinpiets))

## [1.4.1](2020-07-23)

#### Bug fixes

- [#313](https://github.com/Amsterdam/vergunningcheck/pull/313) Hotfix: Some small improvements #313
- [#312](https://github.com/Amsterdam/vergunningcheck/pull/312) Hotfix: Removed unneccesary chappie2.0 files #312

## [1.4.0](2020-07-23)

#### New Features

- [#295](https://github.com/Amsterdam/vergunningcheck/pull/295) Feature: Added `zonwering-of-rolluik-plaatsen` OLO flow check ([@robinpiets](https://github.com/robinpiets))
- [#273](https://github.com/Amsterdam/vergunningcheck/pull/273) Updated Footer from ASC-UI and updated List ([@robinpiets](https://github.com/robinpiets))
- [#230](https://github.com/Amsterdam/vergunningcheck/pull/230) Add address fixtures for testing ([@afjlambert](https://github.com/afjlambert))
- [#210](https://github.com/Amsterdam/vergunningcheck/pull/210) Added Sentry to monitor errors and security ([@svenjens](https://github.com/svenjens))
- [#144](https://github.com/Amsterdam/vergunningcheck/pull/144) Netlify (including Autofill) ([@afjlambert](https://github.com/afjlambert))
- [#127](https://github.com/Amsterdam/vergunningcheck/pull/127) Autofill questions ([@afjlambert](https://github.com/afjlambert))
- [#229](https://github.com/Amsterdam/vergunningcheck/pull/229) Improve Boolean answer order (yes/no) ([@afjlambert](https://github.com/afjlambert))
- [#226](https://github.com/Amsterdam/vergunningcheck/pull/226) Add prestart script to install deps ([@afjlambert](https://github.com/afjlambert))
- [#196](https://github.com/Amsterdam/vergunningcheck/pull/196) feat: prevent submit when keyboard is open ([@svenjens](https://github.com/svenjens))
- [#179](https://github.com/Amsterdam/vergunningcheck/pull/179) feature: Added image group support ([@svenjens](https://github.com/svenjens))
- [#197](https://github.com/Amsterdam/vergunningcheck/pull/197) Kozijn check to production (develop branch) ([@svenjens](https://github.com/svenjens))
- [#142](https://github.com/Amsterdam/vergunningcheck/pull/142) Prettier import order ([@afjlambert](https://github.com/afjlambert))

#### Bug fixes

- [#278](https://github.com/Amsterdam/vergunningcheck/pull/278) Fix back-back-forward bug, add DDTable for easier debuggin ([@afjlambert](https://github.com/afjlambert))
- [#290](https://github.com/Amsterdam/vergunningcheck/pull/290) Revert "Bump react-scripts from 3.4.0 to 3.4.1" ([@afjlambert](https://github.com/afjlambert))
- [#288](https://github.com/Amsterdam/vergunningcheck/pull/288) Fix: Select kept firing empty onChange events making the form unable to submit ([@robinpiets](https://github.com/robinpiets))
- [#259](https://github.com/Amsterdam/vergunningcheck/pull/259) Fix: autofill after refresh ([@svenjens](https://github.com/svenjens))
- [#252](https://github.com/Amsterdam/vergunningcheck/pull/252) Fix sttr-flow without address page ([@afjlambert](https://github.com/afjlambert))
- [#249](https://github.com/Amsterdam/vergunningcheck/pull/249) fix: Remove legacy lru-cache dependency ([@afjlambert](https://github.com/afjlambert))
- [#238](https://github.com/Amsterdam/vergunningcheck/pull/238) Fix several bugs ([@afjlambert](https://github.com/afjlambert))
- [#237](https://github.com/Amsterdam/vergunningcheck/pull/237) bug: Fix olo flow after autofill ([@afjlambert](https://github.com/afjlambert))
- [#223](https://github.com/Amsterdam/vergunningcheck/pull/223) Bug: fixed default export with graphqlHTTP ([@robinpiets](https://github.com/robinpiets))
- [#207](https://github.com/Amsterdam/vergunningcheck/pull/207) fix: Remove stored answers after checker reset ([@robinpiets](https://github.com/robinpiets))

#### Chores

- [#236](https://github.com/Amsterdam/vergunningcheck/pull/236) chore: Create dependabot.yml ([@afjlambert](https://github.com/afjlambert))
- [#239](https://github.com/Amsterdam/vergunningcheck/pull/239) [Security] Chore(deps): Bump lodash from 4.17.15 to 4.17.19 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#270](https://github.com/Amsterdam/vergunningcheck/pull/270) Chore(deps): Bump react-hook-form from 6.0.6 to 6.0.8 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#268](https://github.com/Amsterdam/vergunningcheck/pull/268) Chore(deps): Bump graphql-tools from 6.0.13 to 6.0.14 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#258](https://github.com/Amsterdam/vergunningcheck/pull/258) Chore(deps): Bump react-hook-form from 6.0.5 to 6.0.6 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#253](https://github.com/Amsterdam/vergunningcheck/pull/253) Chore(deps): Bump @sentry/browser from 5.19.1 to 5.19.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#257](https://github.com/Amsterdam/vergunningcheck/pull/257) Chore(deps): Bump react-hook-form from 6.0.4 to 6.0.5 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#255](https://github.com/Amsterdam/vergunningcheck/pull/255) Chore(deps): Bump graphql-tools from 6.0.12 to 6.0.13 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#244](https://github.com/Amsterdam/vergunningcheck/pull/244) Chore(deps): Bump @sentry/browser from 5.18.1 to 5.19.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#248](https://github.com/Amsterdam/vergunningcheck/pull/248) Chore(deps): Bump react-hook-form from 6.0.2 to 6.0.4 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#240](https://github.com/Amsterdam/vergunningcheck/pull/240) Chore(deps): [Security] Bump websocket-extensions from 0.1.3 to 0.1.4 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#235](https://github.com/Amsterdam/vergunningcheck/pull/235) Import order ([@afjlambert](https://github.com/afjlambert))
- [#233](https://github.com/Amsterdam/vergunningcheck/pull/233) Chore(deps): Bump react-hook-form from 6.0.1 to 6.0.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#213](https://github.com/Amsterdam/vergunningcheck/pull/213) Make bundle size smaller (replaced uniqBy and updated react-hook-form) ([@svenjens](https://github.com/svenjens))
- [#214](https://github.com/Amsterdam/vergunningcheck/pull/214) Chore: added npm install to build:size-report script ([@robinpiets](https://github.com/robinpiets))
- [#208](https://github.com/Amsterdam/vergunningcheck/pull/208) chore: Updated PR/commit badges ([@robinpiets](https://github.com/robinpiets))
- [#182](https://github.com/Amsterdam/vergunningcheck/pull/182) chore: Added bundle size reporting on PRs ([@robinpiets](https://github.com/robinpiets))
- [#190](https://github.com/Amsterdam/vergunningcheck/pull/190) chore: Prepare size report with build script ([@robinpiets](https://github.com/robinpiets))
- [#180](https://github.com/Amsterdam/vergunningcheck/pull/180) Feature/codecov GitHub action ([@afjlambert](https://github.com/afjlambert))

## [1.3.3](2020-06-30)

#### New Features

- [Kozijncheck to production](https://github.com/Amsterdam/vergunningcheck/commit/9564e90403ee06fc79bcb6e633ac8307b050632e)
- [#152](https://github.com/Amsterdam/vergunningcheck/pull/152) Updated Matomo track events + refactor ([@svenjens](https://github.com/svenjens))
- [#101](https://github.com/Amsterdam/vergunningcheck/pull/101) Added browser refresh button support ([@svenjens](https://github.com/svenjens))
- [#156](https://github.com/Amsterdam/vergunningcheck/pull/156) Create LICENSE ([@afjlambert](https://github.com/afjlambert))

#### Bug fixes

- [#162](https://github.com/Amsterdam/vergunningcheck/pull/162) Fixed the cursor with Links and fetched the correct context ([@svenjens](https://github.com/svenjens))

#### Chores

- [#100](https://github.com/Amsterdam/vergunningcheck/pull/100) Adding themeSpacing() ([@robinpiets](https://github.com/robinpiets))
- [#153](https://github.com/Amsterdam/vergunningcheck/pull/153) Improve eslint configuration, fix some warnings ([@afjlambert](https://github.com/afjlambert))

## [1.3.1](2020-06-23)

#### :rocket: Enhancement

- [#82](https://github.com/Amsterdam/vergunningcheck/pull/82) Implement helmet fixes and configure nginx accordingly ([@afjlambert](https://github.com/afjlambert))
- Fixed the intro image scale
- Hotfix: added usabilla url to nginx config

#### :house: Internal

- [#160](https://github.com/Amsterdam/vergunningcheck/pull/160) Implement fixes for new headers ([@afjlambert](https://github.com/afjlambert))

## [1.0.0](https://github.com/Amsterdam/vergunningcheck/tree/v1.0.0) (2020-05-06)

### Features

...

### [0.1.19](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.18...v0.1.19) (2020-03-30)

### Features

- added location Results Page Description 2 ([52ab292](https://github.com/Amsterdam/Vergunningschecker/commit/52ab29292bcd128506447c51a1d3b9fce71299b4))
- added matomo trackevent to STTR flow as well ([0b4297c](https://github.com/Amsterdam/Vergunningschecker/commit/0b4297ce956f4d91d6f2aedae0464ef0e45c7164))
- added uniqBy to permit results ([0b8c1a6](https://github.com/Amsterdam/Vergunningschecker/commit/0b8c1a6756de33a9cd74d16337471de6801e8e0b))
- Added zonnepaneel (on ACC) ([a58ca7f](https://github.com/Amsterdam/Vergunningschecker/commit/a58ca7ff89ce02d306fb597f0587e039a3051a5f))
- Updated maps URLs ([307f341](https://github.com/Amsterdam/Vergunningschecker/commit/307f34179eee0c12e5b880cdf641b7298ad27a0b))

### [0.1.18](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.17...v0.1.18) (2020-03-23)

### Features

- Updated STTR checker and added longDescription ([163aeb0](https://github.com/Amsterdam/Vergunningschecker/commit/163aeb0ee0051e2855b1851b51206c96e9a695e5))

### [0.1.17](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.16...v0.1.17) (2020-03-20)

### Features

- added dakraam sttr checker ([39d4de1](https://github.com/Amsterdam/Vergunningschecker/commit/39d4de1d7c5c5a99970036727902e540b8d0842d))
- Added Netlify config ([129cd78](https://github.com/Amsterdam/Vergunningschecker/commit/129cd782abe3ad7a018e666a48ed73f95b0d3c5e))
- Dakraam status is LIVE ([b820660](https://github.com/Amsterdam/Vergunningschecker/commit/b8206605fbb457faf4eaa5c296d9659977542e0b))

### Bug Fixes

- Added uuid (herbruikbaarId) to some questions ([94477e9](https://github.com/Amsterdam/Vergunningschecker/commit/94477e92896ae97c3ca3e6e66c1363b73f7e1243))
- Dakkapel typos ([eeebfa3](https://github.com/Amsterdam/Vergunningschecker/commit/eeebfa34dcf6072d4b34f3be37063db248d9cd4d))
- Updated texts ([2097d76](https://github.com/Amsterdam/Vergunningschecker/commit/2097d76e26f321ca1f6bd200486125602e62a946))

### [0.1.16](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.15...v0.1.16) (2020-03-17)

### Features

- added "redirect naar OLO" to matomo tracking ([63a8fc9](https://github.com/Amsterdam/Vergunningschecker/commit/63a8fc93cb317c9740c1024e10717e7e4448ba67))
- added postcode tracking per topic ([774a24e](https://github.com/Amsterdam/Vergunningschecker/commit/774a24e0e6d654a6d275a4345d59e90263b57c9e))
- updated texts for dakraam ux-test ([7ab9cdb](https://github.com/Amsterdam/Vergunningschecker/commit/7ab9cdbdf3b238296e74e878bd9f1861b1098e7e))

### Bug Fixes

- Don't track root redirects, only track subpages ([2e3206e](https://github.com/Amsterdam/Vergunningschecker/commit/2e3206e420e41e9c811ba8e7ab4bc9c56ee3f0cb))

### [0.1.15](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.13...v0.1.15) (2020-03-11)

### Bug Fixes

- update useEffect to trigger trackPageView ([633cb60](https://github.com/Amsterdam/Vergunningschecker/commit/633cb6013650a8a7b7c68190a2efa44f7bfef72d))

### [0.1.14](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.13...v0.1.14) (2020-03-11)

### Features

- Added page titles via Helmet ([2b657be](https://github.com/Amsterdam/Vergunningschecker/commit/2b657bec4b1520ce883b5e273b9222a5e5b58b27))
- enabled dakraam on ACC for UX test ([cd248fa](https://github.com/Amsterdam/Vergunningschecker/commit/cd248fa83e797c769e25ca4d6d7684b3e84f3a9f))
- updated trackevents for ConclusionsPage ([89765b9](https://github.com/Amsterdam/Vergunningschecker/commit/89765b9206a1cba80f3acb45d123f9b12af2676d))
- enabled dakraam on ACC for UX test ([cd248fa](https://github.com/Amsterdam/Vergunningschecker/commit/cd248fa83e797c769e25ca4d6d7684b3e84f3a9f))

### Bug Fixes

- added preventdefault to buttons ([b165535](https://github.com/Amsterdam/Vergunningschecker/commit/b16553595618e027a33718c2c6cb016769bf2b39))
- typos and text changes for `dakraam` ([7057ef3](https://github.com/Amsterdam/Vergunningschecker/commit/7057ef3b1d7b6794301fccf21c235e93ccaf8a44))
- Updated Dakraam STTR / JSON ([0f5fc5e](https://github.com/Amsterdam/Vergunningschecker/commit/0f5fc5e5246f16a348f7c513eb9561e10c7c0b55))

### [0.1.13](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.12...v0.1.13) (2020-03-04)

### Bug Fixes

- Bug in IE11 with IntroductionText ([71f2f8d](https://github.com/Amsterdam/Vergunningschecker/commit/71f2f8d10bb9b2754d593bc4918546bfd3a1f27c))
- Lint error fixes ([8d0f33d](https://github.com/Amsterdam/Vergunningschecker/commit/8d0f33d563bd8a0b4a9040bb48315adade5b7939))
- Typo in Contact page ([f07e01c](https://github.com/Amsterdam/Vergunningschecker/commit/f07e01cefc6e4af4b9ba3eb2570674520e546f3f))

### [0.1.12](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.11...v0.1.12) (2020-03-03)

- Fix robots.txt
- Fix build jobs
- Updated STTR files

### [0.1.11](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.10...v0.1.11) (2020-03-03)

### Features

- added a scroll to top ([bc83559](https://github.com/Amsterdam/Vergunningschecker/commit/bc835596ea642ccce5f830c3d9594975cb4c39e3))
- Added building and fetching STTR file ([c732734](https://github.com/Amsterdam/Vergunningschecker/commit/c732734ba4a5e39c9da44cd033e74bf73a5bf70e))
- Added context api stack ([f941151](https://github.com/Amsterdam/Vergunningschecker/commit/f941151ef1461bc88e8682498714896d60f2d045))
- Added context to the results page ([96cbfa6](https://github.com/Amsterdam/Vergunningschecker/commit/96cbfa633f1c3a4dbfa7f9f02ee16bc488f04615))
- Added Question Form and ASC Components ([13794fe](https://github.com/Amsterdam/Vergunningschecker/commit/13794fe143193590672dc0bbef44f0c5c922c15a))
- Added question player based on `sttr-demo` ([e801d5f](https://github.com/Amsterdam/Vergunningschecker/commit/e801d5faf276263ef5cea2430155e4ca8b556215))
- Added the dakraamplaatsen route on dev and production ([b794de9](https://github.com/Amsterdam/Vergunningschecker/commit/b794de9a747848054ef782f07f2eecbc483e7f75))
- added the location result page ([e3995c5](https://github.com/Amsterdam/Vergunningschecker/commit/e3995c5b2dda4d8de429bf1cc1a876ee3f64223f))
- added the neem contact op met route ([24c1100](https://github.com/Amsterdam/Vergunningschecker/commit/24c1100d9abafc092a2d738370dc666a5a33218b))
- certein fixes ([37ae019](https://github.com/Amsterdam/Vergunningschecker/commit/37ae019f55f33eaa220098acf113af3398e56182))
- Disabled the question type checker because it breaks the `Aanbouw` checker ([b022966](https://github.com/Amsterdam/Vergunningschecker/commit/b0229664da27f29d8bb30a815d4033f7413b0775))
- Do not allow live checkers in Production ([82afe34](https://github.com/Amsterdam/Vergunningschecker/commit/82afe346de2d47c9eb5155754c53fea008747282))
- Fixed full checker flow ([0adc8fc](https://github.com/Amsterdam/Vergunningschecker/commit/0adc8fcdbc673dbc89a0b16ec3cea784261f56b1))
- List question support ([dda2303](https://github.com/Amsterdam/Vergunningschecker/commit/dda230347f904ebfbe3250b1f87258363e284e07))
- Neem contact op fall out toegevoegd ([dd96285](https://github.com/Amsterdam/Vergunningschecker/commit/dd96285e3cdcc55b86a19a11b6a9c4ff193358b0))
- Push STTR Checker to ACC ([ee3aa07](https://github.com/Amsterdam/Vergunningschecker/commit/ee3aa07c83903270f35d9bb47dd51a2ae01f87c7))
- Removed use context from duties ([e67b2a4](https://github.com/Amsterdam/Vergunningschecker/commit/e67b2a4ef9b5a05649fd1f23ae2f5748a68b452b))
- Reset list counter ([25a0a8e](https://github.com/Amsterdam/Vergunningschecker/commit/25a0a8e93832fea13bc64ce82cd14845397843e6))
- Small improvements to the answer page ([7ae6100](https://github.com/Amsterdam/Vergunningschecker/commit/7ae610083da2c3ffa6c1fedb7ab07636285c42ba))

### Bug Fixes

- added proptypes to conclusions ([cb65dae](https://github.com/Amsterdam/Vergunningschecker/commit/cb65dae9e495046c97e5fea230724b1e7ef3d284))
- Added useContext ([9194237](https://github.com/Amsterdam/Vergunningschecker/commit/91942375ad777c2a555439cae8088a45a7e6dcb8))
- Also added the question to context ([40ffb7c](https://github.com/Amsterdam/Vergunningschecker/commit/40ffb7c67a91230911d4ef0fc75fc95af3f93bac))
- Correct fall out on toestemmingsvrij ([af8fdc3](https://github.com/Amsterdam/Vergunningschecker/commit/af8fdc3b13361078a0fb1885805394503d93f8bd))
- Fix olo redirect ([1f814c1](https://github.com/Amsterdam/Vergunningschecker/commit/1f814c1b52cf9058a8685ecc3b8241857e78affc))
- Fix rewind to and concolusiepagina ([5500709](https://github.com/Amsterdam/Vergunningschecker/commit/5500709360b7094bdd8fddb91cb6c7031ec284ec))
- Fixed a bug with handling boolean / list answers ([f2e0d07](https://github.com/Amsterdam/Vergunningschecker/commit/f2e0d071ff739f8551bb41d8005485d79f87f5de))
- Fixed a bug with setting boolean options ([07c81a8](https://github.com/Amsterdam/Vergunningschecker/commit/07c81a89aced13148a08d3814efa15beab2fa1dd))
- Fixed a concolusion bug ([a285a51](https://github.com/Amsterdam/Vergunningschecker/commit/a285a5193201c4d0241dbdd4dc2d7d5935b86bbf))
- Fixed going back in the flow ([6ac02d4](https://github.com/Amsterdam/Vergunningschecker/commit/6ac02d4d67c30e4c706f421693161565a4f44404))
- fixed issue regarding opening checker ([6c02323](https://github.com/Amsterdam/Vergunningschecker/commit/6c02323c4dd0296025e913537d7e3293e7512729))
- Fixed merge conflicts ([17fb0ed](https://github.com/Amsterdam/Vergunningschecker/commit/17fb0edadd9a5761a60445e655f6d91f4973da12))
- Fixed prev button on results ([576d3e7](https://github.com/Amsterdam/Vergunningschecker/commit/576d3e7617907009293fdcaa54c49a296a973312))
- Fixed the redirect to the olo ([f145309](https://github.com/Amsterdam/Vergunningschecker/commit/f145309fe49a49711d89be08bf4e82373ff4e71e))
- IE11 fix with image size ([76e1f39](https://github.com/Amsterdam/Vergunningschecker/commit/76e1f39e69c0bbbfdfd239b89161bbdae605f0e1))
- Maps bug ([7bdc646](https://github.com/Amsterdam/Vergunningschecker/commit/7bdc64603e94fc123564be1a6bdb68a1959e00db))
- Readded link to olo ([f89fb85](https://github.com/Amsterdam/Vergunningschecker/commit/f89fb8584b18e23be2d30243097c34bd86255ca7))
- Removed duplicate useEffect ([2a7d155](https://github.com/Amsterdam/Vergunningschecker/commit/2a7d155dd56c336b9bf6341d5f323fe6f86e0bc7))
- STTR build now fetching from Flo Legals staging ([d2afe3a](https://github.com/Amsterdam/Vergunningschecker/commit/d2afe3ab0f59cb31aea6436b9c5bf1507bdb10cb))
- Temp disabled the 'dakraam' topic ([f41ea50](https://github.com/Amsterdam/Vergunningschecker/commit/f41ea5096ef03d7e6bd3d707fc964a7b86e0a2fa))
- Typo in dakkapel location Results Page Description ([f80d066](https://github.com/Amsterdam/Vergunningschecker/commit/f80d066d0303c5bb9182115a23e9701d66bee13b))
- Updated the checker fix ([0186d33](https://github.com/Amsterdam/Vergunningschecker/commit/0186d33d5e001ec4c553618747ac80cae7af4d01))
- When going back in the checker show the location result page ([37041f4](https://github.com/Amsterdam/Vergunningschecker/commit/37041f423a1050a7802080c69b6942da7e55eecd))

### Refactors

- changed a -> button ([3589e52](https://github.com/Amsterdam/Vergunningschecker/commit/3589e52f41cd04303845a1bf3fa36a53c77afc9a))
- Fixed merge conflict ([8868cba](https://github.com/Amsterdam/Vergunningschecker/commit/8868cba2bd973983dd99b109e6095c6079c87166))
- moved to react ([b6e79d6](https://github.com/Amsterdam/Vergunningschecker/commit/b6e79d68d5aac05eaeab2187d4b07b3ce2fb3da1))
- Removed unused files ([cd5becc](https://github.com/Amsterdam/Vergunningschecker/commit/cd5becc4b924de097e892f8207ee180224841c67))

### Styling

- Added better mobile styling on results page ([083d352](https://github.com/Amsterdam/Vergunningschecker/commit/083d352292f10694ec1ba7a419ef78b50ff40c6c))
- Added more styling to the results page ([79a203b](https://github.com/Amsterdam/Vergunningschecker/commit/79a203b0b0088366e3adaaf98461b419e2ab43d7))
- Changed certain text ([ec707b9](https://github.com/Amsterdam/Vergunningschecker/commit/ec707b93667a5293ad6083580e7b289c6845c46b))
- Removed omgevingsloket notice from sttr flow ([b7cdde4](https://github.com/Amsterdam/Vergunningschecker/commit/b7cdde4c663b35c34ca0901302dcd8d0b8d5fd20))
- Replaced link -> button ([baf8745](https://github.com/Amsterdam/Vergunningschecker/commit/baf87455e217fb70dfaa2f933db55343a44edaff))

### [0.1.10](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.9...v0.1.10) (2020-02-05)

### Bug Fixes

- Ie fix ([47beefb](https://github.com/Amsterdam/Vergunningschecker/commit/47beefb7cf59f38500f2fbdee8089c42ef7bf5b8))

### [0.1.9](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.7...v0.1.9) (2020-01-30)

### Features

- added tracker to postcode (first 4 characters) ([c4cff1c](https://github.com/Amsterdam/Vergunningschecker/commit/c4cff1ca4c297e95eaf7f9f66e3b82a93e95a2c8))

### Bug Fixes

- disable duplicate fetches [#170](https://github.com/Amsterdam/Vergunningschecker/issues/170) ([118cf5b](https://github.com/Amsterdam/Vergunningschecker/commit/118cf5b0f11c738cbd2cb10d18161571e85e6a33))
- removed package lock ([fd8d267](https://github.com/Amsterdam/Vergunningschecker/commit/fd8d2676252de8829a769af2509bf19d27fdb4c4))

### [0.1.8](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.7...v0.1.8) (2020-01-29)

### Bug Fixes

- Properly added name param to trackEvent ([b439c0b](https://github.com/Amsterdam/Vergunningschecker/commit/b439c0b9ee1840b0b0303d1a7e40facce295fb5c))

### [0.1.7](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.6...v0.1.7) (2020-01-29)

### Features

- Added current topic to Matomo tracking ([567f057](https://github.com/Amsterdam/Vergunningschecker/commit/567f05784cb4dcc7b55487966d7ebe638e013e11))
- Location Page improvements: flow, text and bugs ([8219b33](https://github.com/Amsterdam/Vergunningschecker/commit/8219b33538bcb2ea59ed09fc0b362b0373a4c1b4))
- Location Page updates: styling and text changes ([32c719e](https://github.com/Amsterdam/Vergunningschecker/commit/32c719e88ce4d17e27ac2df4a899176303f77cf7))
- Split up the location page ([168f7a4](https://github.com/Amsterdam/Vergunningschecker/commit/168f7a4158800eb8b52b0a984e27bd0b96510fad))
- Split up the location page in 3 pages ([8e769e2](https://github.com/Amsterdam/Vergunningschecker/commit/8e769e279eaafceb4e61ccab9d8be9993220fe89))
- textual changes on location intro page ([dd7d158](https://github.com/Amsterdam/Vergunningschecker/commit/dd7d158625ca86d4c2099414616e295d33146f81))

### Bug Fixes

- Added default form values if exist ([3347a2a](https://github.com/Amsterdam/Vergunningschecker/commit/3347a2a19d8842ec64fa3edae6dc576207a03999))
- Added yarn-error.log to gitignore ([3583d2d](https://github.com/Amsterdam/Vergunningschecker/commit/3583d2dd23f2d2a931418895cb0315fa2c284ea2))
- Fixed incorrrect monument data ([01a9b05](https://github.com/Amsterdam/Vergunningschecker/commit/01a9b0556b9251f42e0ccd83502b71e4d684a940))
- Fixed merge conflicts ([afe45d4](https://github.com/Amsterdam/Vergunningschecker/commit/afe45d498bcb8ce87b0548b34e92c853a888673e))
- Fixed merge conflicts ([5cec965](https://github.com/Amsterdam/Vergunningschecker/commit/5cec9655cf75daafc55bd430b19e697df471382d))
- Fixes [#151](https://github.com/Amsterdam/Vergunningschecker/issues/151) after changes pages keep input value ([9c32747](https://github.com/Amsterdam/Vergunningschecker/commit/9c3274737bc565b733f5c2e71f33cd94fe007f29))
- If there are default values form continue ([e6d6eee](https://github.com/Amsterdam/Vergunningschecker/commit/e6d6eee799d2fc90790a2f18760935791fcbe8a0))
- Moved code fragment ([7fc9507](https://github.com/Amsterdam/Vergunningschecker/commit/7fc9507db6dfde806c3257bb12133e9a7a1b2dfc))
- Removed results length check logic ([c294b83](https://github.com/Amsterdam/Vergunningschecker/commit/c294b83571ecd61d2da704f7de80645a03b6bcd6))
- Removed unused suffix ([57995a2](https://github.com/Amsterdam/Vergunningschecker/commit/57995a2bb2192de1cd1fc4f8226bb88008cf220f))
- reset develop ([ecd5ffd](https://github.com/Amsterdam/Vergunningschecker/commit/ecd5ffd0a70022b519dbb225fd4473e495d0fe05))

### Refactors

- Added text for other topics ([9279d5e](https://github.com/Amsterdam/Vergunningschecker/commit/9279d5e87703893d4ed57d41f953dd4a1cdfad3c))
- Change mutliple text for each topic ([2a7a503](https://github.com/Amsterdam/Vergunningschecker/commit/2a7a50379b447aba332ebee438d5fd6d3f627dd9))
- Fixed merge conflicts ([d01dda6](https://github.com/Amsterdam/Vergunningschecker/commit/d01dda6eaa7b46ff2ad0281c3758189695d37258))
- Readded moved files ([fe9e3c5](https://github.com/Amsterdam/Vergunningschecker/commit/fe9e3c590769daa1bf467300fc5040a8b4d0b816))
- refactored location data ([1dad6f8](https://github.com/Amsterdam/Vergunningschecker/commit/1dad6f87793c2aa23122f28d323f84f31def3d58))
- Removed unused delay ([f60995a](https://github.com/Amsterdam/Vergunningschecker/commit/f60995a56f41fa92635ea8500c1a9d702a0e29f3))

### [0.1.6](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.5...v0.1.6) (2020-01-27)

### Features

- Disallow all robots to our app ([674dbb7](https://github.com/Amsterdam/Vergunningschecker/commit/674dbb781401584f23706c137c0b92f308d8916c))

### [0.1.5](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.4...v0.1.5) (2020-01-22)

### Features

- Optimized Build by removing full lodash and others ([95648f6](https://github.com/Amsterdam/Vergunningschecker/commit/95648f616d59a204ef2172b7883c39f1641747f6))
- Upgraded dependencies and fixed its errors ([5b48baf](https://github.com/Amsterdam/Vergunningschecker/commit/5b48baf43bc797281b756d31fbe79b7a222895ba))

### Refactors

- fixed new Lint errors and warning ([b286648](https://github.com/Amsterdam/Vergunningschecker/commit/b28664832d840ea807f635f5b454beb22e0d2b83))
- removed old scripts and packages ([6a50bab](https://github.com/Amsterdam/Vergunningschecker/commit/6a50bab475f88984c8493daaea6afa0c9e1ae6e2))
- removed unused service ([fcf70a6](https://github.com/Amsterdam/Vergunningschecker/commit/fcf70a66f12d7705b4c6120378cf04ff6143224b))

### [0.1.4](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.3...v0.1.4) (2020-01-21)

### Features

- Added `RemoveServiceWorkerPlugin` to remove old `OfflinePlugin` ([ba119c4](https://github.com/Amsterdam/Vergunningschecker/commit/ba119c429728b5e30d246b5d8be07e510bba5ef8))
- Disabled service worker + added dangerous comment ([34314c0](https://github.com/Amsterdam/Vergunningschecker/commit/34314c070fa34424c0e0cf9ac572dd453d77ce23))

### [0.1.3](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.2...v0.1.3) (2020-01-20)

### Features

- Update creation of OLO parameters 1/2 ([4c5aec9](https://github.com/Amsterdam/Vergunningschecker/commit/4c5aec92d6e08f5e20faee3e650cee9c27958c98))
- Updated creation of OLO parameters 2/2 ([ffded22](https://github.com/Amsterdam/Vergunningschecker/commit/ffded227957780bd740b4fcac486ddbb96906aff))
- Updated maps URL for better result ([8305d08](https://github.com/Amsterdam/Vergunningschecker/commit/8305d08b9f46089b97034a3d1abdf0ae8188cf32))

### [0.1.2](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.1...v0.1.2) (2020-01-15)

### Bug Fixes

- Fixed a issue with non existing routes ([5e351d9](https://github.com/Amsterdam/Vergunningschecker/commit/5e351d97e0de38b26041a01bd9be105fc31f2bd3))
- Fixed monument API bug ([2ddb1c8](https://github.com/Amsterdam/Vergunningschecker/commit/cf9e122e60cfc400d8918d0ce834818a48767330))

### [0.1.1](https://github.com/Amsterdam/Vergunningschecker/compare/v0.1.0...v0.1.1) (2020-01-15)

### Features

- LocationPage styling and text
- Header styling and text
- Footer styling and text
- NotFoundPage styling and text
- Added `nextText` prop to `Navigation`
- Improved redirects to `oloChecker`
- Added functions to `GET_CURRENT_TOPIC` and `GET_CURRENT_PAGE`
- Added function to `GET_TEXT` based on `Topic`
- Updated Routes and Links
- Fixed Bestemmingsplan bugs
- Fix Momument fetch #124
- Fix LocationPage input bugs

### Bug Fixes

- 19c now works :-) ([cc51938](https://github.com/Amsterdam/Vergunningschecker/commit/cc51938e92950c6e3730b6c7777bf0052583c6b4))
- also metrostation weesperplein works ([47b81f7](https://github.com/Amsterdam/Vergunningschecker/commit/47b81f769c15e98d8628d54907fcabef08f4a3ae))
- Bug in housenummer suffix ([8c949a6](https://github.com/Amsterdam/Vergunningschecker/commit/8c949a6dfffa090d86cc7edf3761f45e328a6404))
- Fixed a bug where results are not filtered correctly fixes [#117](https://github.com/Amsterdam/Vergunningschecker/issues/117) ([f7a0a62](https://github.com/Amsterdam/Vergunningschecker/commit/f7a0a62692f8dfb8dcb4cf8118daa69b6485e29f))
- readded toevoeging check ([f924458](https://github.com/Amsterdam/Vergunningschecker/commit/f92445893a28f3263bbf174dc2ce07f20ed7bd65))
- Removed duplicates from toevoeging ([35b04c9](https://github.com/Amsterdam/Vergunningschecker/commit/35b04c9bb1e3cb75b1bf6b17de513cf4d425b313))
- Streetnumber is now split ([5b89179](https://github.com/Amsterdam/Vergunningschecker/commit/5b89179edeae918c0a64426808b9542eabde7baf))
- Validated postcode with space at end ([35053af](https://github.com/Amsterdam/Vergunningschecker/commit/35053af37db8ac8450bc95dfbd25d9ac1bf2d912))

### Refactors

- Added better outlining for the versionrc ([84d1293](https://github.com/Amsterdam/Vergunningschecker/commit/84d1293647509603ebea36ecb2634dc0430f3bfa))
- Removed old data from changelog ([e1db252](https://github.com/Amsterdam/Vergunningschecker/commit/e1db2521fbab2bc4b589f6f5b64a384f306896d5))

## [0.1.0](https://github.com/Amsterdam/Vergunningschecker/compare/v0.0.8...v0.1.0) (2020-01-09)

### Features

- Added more standard version ([1e9f67e](https://github.com/Amsterdam/Vergunningschecker/commit/1e9f67eb1fc89f8082dd2428c92077df24fd3886))
