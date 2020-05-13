FROM node:14.0.0-alpine3.11 AS builder
SHELL ["/bin/ash", "-c"]
WORKDIR /workspaces
RUN apk update
RUN apk add git
RUN git clone https://github.com/big-gate-0219/workrecord-nuxt.git
WORKDIR /workspaces/workrecord-nuxt/
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]
EXPOSE 3000

#docker image build -t workrecord-nuxt:0.2.0 .
#docker run -it --rm -p 3000:3000 --link workrecord-go --name workrecord-nuxt workrecord-nuxt:0.2.0
