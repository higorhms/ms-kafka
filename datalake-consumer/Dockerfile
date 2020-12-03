FROM node:12-alpine

RUN mkdir /usr/local/datalake-consumer
WORKDIR /usr/local/datalake-consumer

ADD package.json package.json
ADD yarn.lock yarn.lock

RUN yarn install --production
ADD dist/ .

ADD .env .env
ADD pubsub-service-account.json pubsub-service-account.json

CMD [ "npm", "start" ]
