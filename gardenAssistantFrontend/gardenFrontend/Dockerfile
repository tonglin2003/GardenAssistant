FROM node:18-bullseye-slim as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install -g @angular/cli@13
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
