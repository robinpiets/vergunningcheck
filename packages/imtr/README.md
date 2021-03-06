# IMTR build script

This module builds JSON configuration from json files containing IMTR XML.
The JSON output can be used to instantiate a checker client.

How it works;

1. From imtr-xml we create imtr-json via transform.ts.
2. The imtr-json is converted into client-config-json (eg dakkapel-plaatsen.json)
3. The client-config-json is fed into `IMTRClient.getChecker()`
4. The IMTRClient contains statefull js-objects you can interact with

We use [Deno](https://deno.land) to download and convert all configuration. Tested with Deno 1.3.3.

## Install and setup

- Followed the install steps in our project level [README.md](../../README.md) if you haven't already
- [Install Deno itself](https://deno.land/#installation)
- Download the deps by running `deno cache --unstable --reload --lock=lock.json src/deps.ts`
- Optional: create a development config file, see [./src/config.local.dist.ts](./src/config.local.dist.ts)

## Usage

You can now use this script. See `deno run --unstable -c tsconfig.json src/main.ts --help` for command line usage and
[CONTRIBUTING.md](../../CONTRIBUTING.md) for examples.

## Deno flags

We need some flags to make main.ts work.

- `--unstable` the deno fs package relies on unstable api's like utime and symlink
- `--allow-write` write json files
- `--allow-env` for reading STTR-builder secret key
- `--allow-read` read xml files
- `--allow-net` fetch json from rest api

## Testing

```
deno test --unstable --allow-read
```

## Reload dependencies

```
deno cache --reload --unstable src/deps.ts
deno cache --unstable src/deps.ts --lock=lock.json --lock-write
```
