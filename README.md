# Storio Starter Pack

* Docker
* NextJS 14 - Typescript
* Tailwind
* SASS
* NextThemes


## Docker Based Development
To handle the difference of node versions

```bash
# Build Image
docker build -t storio-starter-pack . --no-cache

# First Install
npm run docker:install

# Local Development
npm run docker:dev

# Build
npm run docker:build

# Start
npm run docker:start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sample `.env`
```

```

## ERD
![ERD](/prisma/prisma-erd.svg)
