# Coinbase API dashboard

Users have to be able to make transactions between each other, via coinbase API calls, before the transaction occurs the cryptocurrency needs to be converted to EUR(via exchange via the exchange feature).

There will be 2 types of users. Normal users and merchants. Merchants will need a token that identifies them when we do transactions.

When a transaction is initiated and on the way, the API needs to inform both users that the transaction is approved.

We need the coinbase API to send the EUR to IBAN accounts once every 10 days. (Cron job-is). You can add accounts and sub accounts on the coinbase API and these can then be used to send the money via IBAN.

Coinbase API: https://www.coinbase.com/cloud

## Installation

```bash
git clone https://github.com/weis95/component-library
```

```bash
# install dependencies
npm i

# local run
npm start
```

## Folder structure

- /src
  - /company
    - domain (services and model)
    - application (company-centered UI)
    - infrastructure (api & storage)
  - /user
    - domain (services and model)
    - application (user-centered UI)
    - infrastructure (api & storage)
  - /pages (follows the navigations logic -> each foler is a different navigation   route and they are divided by domains)
  - /shared
    - components: UI shared components
    - lib: JS-pure constants and value objects
    - theme: MaterialUI custom theme
    - utils: pure JS functions
