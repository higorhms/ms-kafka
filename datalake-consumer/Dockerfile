FROM node:12-alpine

RUN mkdir /usr/local/datalake-consumer
WORKDIR /usr/local/datalake-consumer

ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install --production
ADD dist/ .

ADD .env .env
ADD pubsub-service-account.json pubsub-service-account.json

CMD [ "npm", "start" ]
