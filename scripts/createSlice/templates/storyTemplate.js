module.exports = (
  layer,
  componentName,
) => `import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const ${componentName}Story: ComponentMeta<typeof ${componentName}> = {
  title: '${layer}/${componentName}',
  component: ${componentName},
} 
export default ${componentName}Story;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;
export const Normal = Template.bind({});`;
