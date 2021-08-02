FROM node:14.16

WORKDIR /var/www

COPY . /var/www

RUN npm install \
	&& npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]