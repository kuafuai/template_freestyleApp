FROM nginx

WORKDIR /app

COPY index.html .
COPY main.js .
COPY style.css .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
