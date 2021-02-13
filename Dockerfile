ARG IMAGE=node:14.15.5-alpine3.10
FROM $IMAGE as build
WORKDIR /build/
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn prisma generate
RUN yarn build
RUN yarn install --production --ignore-scripts --prefer-offline

FROM $IMAGE
WORKDIR /app
COPY --from=build /build/node_modules/ ./node_modules/
COPY --from=build /build/.next/ ./.next/
COPY --from=build /build/package.json /build/yarn.lock ./
EXPOSE 3000
CMD ["yarn", "start"]