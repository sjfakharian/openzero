# APINex

APINex is a direct OpenAI-compatible provider at `https://api.apinex.bond/v1`. Its public catalog includes paid models and advertises free models, so OpenZero applies two independent cost gates before probing a route:

1. the catalog entry must carry an explicit free marker, such as a free flag/tier or a delimited `free` model-ID segment;
2. both input and output catalog prices must be explicitly numeric zero.

Missing, ambiguous, promotional-credit-only, or non-zero pricing fails closed as `UNKNOWN COST = NOT FREE`. A catalog-qualified route must also pass a bounded chat probe before it becomes production eligible.

Configure APINex without putting the key in shell history:

```bash
openzero provider add apinex
openzero provider test apinex
openzero discover
openzero provider status apinex
```

The key is collected with terminal echo disabled or through the loopback-only Console and stored at `~/.openzero/secrets/apinex.token` (or `~/.zerospend/secrets/apinex.token`) with mode `0600`. It is never returned to the browser or written to JSON configuration.

APINex availability, pricing, and free membership can change. Review the current [model catalog](https://apinex.bond/models), [API documentation](https://apinex.bond/developers), [terms](https://apinex.bond/legal/terms), and [privacy policy](https://apinex.bond/legal/privacy) before use. If no currently verified free route exists, APINex contributes zero capacity and OpenZero never falls back to a paid route.
