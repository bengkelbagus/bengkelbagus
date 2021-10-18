# Dockerfile
FROM node:12.18.0-alpine
WORKDIR /app/

# here we are reading the value from the build args and inserting into the environment variables
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}
ARG NEXT_PUBLIC_FRONTEND_URL
ENV NEXT_PUBLIC_FRONTEND_URL=${NEXT_PUBLIC_FRONTEND_URL}
ARG PORT
ENV PORT=${PORT}

COPY . .
RUN npm i
RUN npm run build
EXPOSE ${PORT}
CMD npm run start -- -p ${PORT}