# mdigitalcn pages

34+ full React page templates for the mdigitalcn ecosystem. Built on `@mdigitalcn/uikit`, Tailwind CSS v4, and `react-hook-form`.

Not published to npm — consumed via the [mdigitalcn CLI](https://github.com/mdigitalcn/cli).

## What's included

**Dashboard** — overview, analytics, reports, admin panel

**Auth** — login, register, forgot password, reset password, OTP verify, onboarding

**Settings** — profile, account, billing, notifications, team management, API keys

**CRM** — contacts list, contact detail, leads pipeline, deal view, activity log

**Ecommerce** — product catalog, product detail, cart, checkout, orders, order detail

**Messaging** — inbox, conversation view, compose

**Calendar** — monthly view, weekly view, event detail

**Error** — 404, 500, maintenance, coming soon

## Add to your project

```bash
mdigitalcn page list
mdigitalcn page add login-page
mdigitalcn page add dashboard-page billing-page
mdigitalcn page info crm-contacts-page
```

The CLI copies source files into your project and installs peer dependencies automatically.

## Peer dependencies

```json
{
  "@mdigitalcn/uikit": "^1.0.13",
  "react-hook-form": "^7.55.0",
  "@hookform/resolvers": "^5.0.0",
  "zod": "^3.0.0",
  "lucide-react": "^0.577.0"
}
```

## Development

```bash
pnpm install
pnpm storybook
```

## License

MIT
