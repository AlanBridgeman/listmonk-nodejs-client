# Listmonk Node Client Library
The idea of this package is to create a more natural feeling client library (particularly for anybody with [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) experiences) than the existing [Listmonk Node API library](https://github.com/mihairaulea/listmonk-nodejs-api).

In particular this means abstracting away a lot of the API structure and calls. And trying to make it feel like the way you would give instructions to someone if you were telling them how to work with the software through the web UI.

That said, still pretty heavy in development and not particularly feature complete. If you need completeness, performance, etc... I'd recommend looking at that other library linked above.

## Getting Started
Granted, this is largely meant as a software package that you would list in your dependencies. 
But, for demo purposes you'll need to copy and fill out the [`.env.example` file](./.env.example) into a `.env` file. 
And then run: `yarn demo` (or equivalent). This will create a campaign, template, list and subscriber in the instance you point it to. 
Under th hood this just runs the "compiled" version of [`demo.ts`](./src/demo.ts)

[`demo.ts`](./src/demo.ts) is also where I would start if your looking to understand how to use this package. Though it should be fairly straightforward and intuitive for anyone with an OOP and typescript background.

## Some Notes
- Forgetting to remember to call `save()` on objects to sync with Listmonk I suspect will be a popular issue for people
- The `fromData` method is an instance method, NOT a static one, so follows a similar theory to ["Hydration"](https://en.wikipedia.org/wiki/Hydration_(web_development)). That is, the instance is usually created and then is filled in with data (these are meant to chain - ex. `new <APIObject>().fromData(...)`)
- You could, call constructors but using the static `.create` methods are usually easier/better.
- I publish to my own private package repository not NPM (hence the `@BridgemanAccessible/` at the beginning of the package name)

## Small Promotions
- [Azure Communication Services (ACS) SNS Relay - including Listmonk endpoint](https://github.com/AlanBridgeman/acs-sms-relay)
- [My Business (Bridgeman Accessible)](https://bridgemanaccessible.ca)

## Contributing, Issues and Pull Request
Feel free to submit issues or pull requests when applicable. I make no promises about answering or any kind of updating/maintenance (particularly on any kind of schedule). But I will try to work with others to have this work for them as I can.