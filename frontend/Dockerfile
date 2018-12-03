FROM node:latest
ENV NODE_ENV global
COPY . .
RUN yarn
RUN ["chmod", "+x", "docker-entrypoint.sh"]
CMD ./docker-entrypoint.sh
