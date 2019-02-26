FROM nginx
COPY ./dist/smsf-masterdata-ui/ /usr/share/nginx/html/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html/
RUN chmod -R 777 *
EXPOSE 80