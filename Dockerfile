# FROM node:lts-alpine
FROM alpine:latest
ENV NODE_ENV=production

# RUN apt-get update && apt-get install -y git vim yarn
RUN apk add git nodejs npm vim yarn

WORKDIR /

COPY ["package.json", "yarn.lock", "./"]

# RUN npm install --production --silent && mv node_modules ../
RUN yarn global add cross-env
RUN yarn

COPY . .

EXPOSE 3017

# set perms
# USER node
# RUN chown -R node /

CMD ["yarn", "start"]
