Style the components according with GOV.UK Design system:
[] Check Dark theme on all components
[] Menu focus state

Add documentation with snippets and variations
[] All components folder
Prompt:
Update `src/components/[ComponentName]/[ComponentName].docs.mdx` and `src/components/[ComponentName]/[ComponentName].stories.tsx` to follow the same documentation pattern used by `src/components/Select/Select.docs.mdx` and `src/components/Select/Select.stories.tsx`.

What I want:

- Move the documentation examples into stories.
- Render those stories inside the MDX docs page.
- Show the code for each example with the `CodeBlock` component, not markdown code fences.

Requirements:

- Add one story per example in `[ComponentName].stories.tsx`.
- Each example story must define `parameters.docs.source.code` with the exact snippet to render in the docs.
- In `[ComponentName].docs.mdx`, import the stories module and bind it with `<Meta of={ComponentStories} />`.
- Create a reusable helper like `ExampleSection` in the MDX file that:
  - renders `<Canvas of={story} sourceState="none" />`
  - renders `<CodeBlock.Root code={story?.parameters?.docs?.source?.code ?? ''} language="tsx" ...>`
  - includes `CodeBlock.Header`, `CodeBlock.Title`, `CodeBlock.CopyButton`, `CodeBlock.Content`, `CodeBlock.Code`, and `CodeBlock.CodeText`
- Keep any intro/setup/help text in the MDX file, but if that section includes code, render it with `CodeBlock` too.
- Do not leave duplicated raw example sections in MDX once the stories exist.
- Avoid Storybook duplicate docs/autodocs issues.
- Preserve the existing component API and repo conventions.

After editing:

- Run a targeted verification step appropriate for the change.
- Prefer a Storybook build for docs/stories changes.
- If the default Node version fails for Storybook, rerun with Node 24.
- Summarize what changed and mention any warnings that are not caused by this work.

Please make the changes directly instead of only describing them.

Add in:
[] Visual test
[] Accessability tests
