
FROM node:10

WORKDIR /app

COPY package*.json ./

# RUN if [["$NODE_ENV" = "development"]]; \
#   then npm install; \
#   else npm install --only=production; \
#   fi

RUN npm install

CMD [ "npm", "run", "start:dev" ]

COPY . .
