import { writeFileSync } from "fs";
import { toPascalCase } from "./utils.mjs";

// Generate index.jsx that exports each icon component
export const generateIconComponentFile = (icons, { dir }) => {
  const indexContent = [
    "import Icon from './Icon';",
    "",
    icons
      ?.map(
        (icon) =>
          `export const ${toPascalCase(
            icon
          )} = props => <Icon {...props} name="${icon}" />;`
      )
      .join("\n"),
  ].join("\n");

  writeFileSync(`${dir}/index.jsx`, indexContent);
  console.log(`Icon component file created! ✅`);
};

// Generate IconMap.jsx that maps icon names to their respective React components
export const generateWebIconMap = (icons, { dir }) => {
  const iconMapContent = [
    icons
      ?.map(
        (icon) =>
          `import { ReactComponent as ${toPascalCase(
            icon
          )} } from './${icon}.svg';`
      )
      .join("\n"),
    "",
    "export default {",
    icons?.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join("\n"),
    "};",
  ].join("\n");

  writeFileSync(`${dir}/IconMap.jsx`, iconMapContent);
  console.log("Web icon map created! ✅");
};
