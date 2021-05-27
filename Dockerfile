FROM node:6.14.2
EXPOSE 3000
COPY bin/www .
CMD node bin/www
