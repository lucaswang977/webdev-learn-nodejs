# Accessibility

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility

## Concept

- What kinds of disability are we looking at?
  - People with visual impairments
  - People with hearing impairments
  - People with mobility impairments
  - People with cognitive impairments
- Implementing accessibility into your project
  - Consider accessibility from the start of a project, and test early and often.
  - Bear in mind that a lot of accessibility best practices benefit everyone, not just users with disabilities.
  - Publish an accessibility statement on your site and engage with people having problems.
- Web Content Accessibility Guidelines (WCAG)
  - [WCAG 2 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
  - Perceivable
  - Operable
  - Understandable
  - Robust

## Accessibility testing checklist

- Make sure your HTML is as semantically correct as possible. Validating it is a good start, as is using an auditing tool.
- Check that your content makes sense when the CSS is turned off.
- Make sure your functionality is keyboard accessible (see UI controls for more details). Test using Tab, Return/Enter, etc.
- Make sure your non-text content has text alternatives. An auditing tool is good for catching such problems.
- Make sure your site's color contrast is acceptable, using a suitable checking tool.
- Make sure hidden content is visible by screen readers.
- Make sure that functionality is usable without JavaScript wherever possible.
- Use ARIA to improve accessibility where appropriate.
- Run your site through an auditing tool.
- Test it with a screen reader.
- Include an accessibility policy/statement somewhere findable on your site to say what you did.

## HTML: A good basis for accessibility

- Good semantics
  - Text content
  - Using clear language
  - Page layouts
  - UI controls
  - Building keyboard accessibility back in
  - Meaningful text labels
