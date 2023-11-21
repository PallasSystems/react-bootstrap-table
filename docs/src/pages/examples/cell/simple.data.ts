export const SimpleExamplesData: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export const GetSimpleBannerExample = (): string => {
  return (
    'const GettingStartedUsagePage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<BannerNavBar />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
