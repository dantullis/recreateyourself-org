

# ##############################################################################################
# ## Base Stage
# ##############################################################################################
# # Create base image using all the tools needed to build the application
# # Using a specific version ensures the exact same base image every time you rebuild the image
# FROM node:16.14.0-alpine3.15 as base

# # Working directory that instructs Docker to use this path as the default location
# # for all subsequent commands. Can use relative paths based on the working directory.
# # Using /node to move modules up a level in the image
# #WORKDIR /node

# # Configure the main working directory inside the docker image.
# # This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# # commands.
# WORKDIR /app

# # Copy the package.json as well as the package-lock.json and install
# # the dependencies. This is a separate step so the dependencies
# # will be cached unless changes to one of those two files
# # are made.
# COPY package*.json ./

# # Install angular cli
# RUN npm i -g @angular/cli

# # Install dependencies first, as they change less often than code.
# RUN npm ci && npm cache clean --force

# # WORKDIR /node/app

# # Copy the main application
# COPY . ./

# ##############################################################################################
# ## Test Stage
# ##############################################################################################

# ##############################################################################################
# ## Development Stage
# ##############################################################################################
# FROM base as development
# # Arguments
# ARG configuration=development

# # Expose port 80 to the Docker host, so we can access it
# # from the outside.
# EXPOSE 80

# EXPOSE 9222

# CMD ["npm", "start"]

# ##############################################################################################
# ## Build Stage
# ##############################################################################################
# FROM base as build
# # Arguments
# ARG configuration=production

# # Build the application
# # RUN npm run build -- --outputPath=./dist/out --configuration $configuration
# RUN npm run build -- --output-path=./dist/out --configuration $configuration

# # RUN npm run build --  --output-path=dist --configuration=$CONFIGURATION --output-hashing=all



# ##############################################################################################
# ## Production Stage
# ##############################################################################################
# #### Stage 2, use the compiled app, ready for production with Nginx
# FROM nginx:1.19.6-alpine as production

# # Copy the angular build from Stage 1
# COPY --from=build /app/dist/out/ /usr/share/nginx/html

# # Copy our custom nginx config
# COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf

# # Expose port 80 to the Docker host, so we can access it
# # from the outside.
# EXPOSE 80

# ENTRYPOINT ["nginx","-g","daemon off;"]


# ######################################################
#### Stage 1: Build the angular application
# FROM node as build
FROM node:16.14.0-alpine3.15 as build
# Configure the main working directory inside the docker image.
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
WORKDIR /app

# Copy the package.json as well as the package-lock.json and install
# the dependencies. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY package*.json ./
RUN npm install

# Copy the main application
COPY . ./

# Arguments
# ARG configuration=production

# Build the application
#RUN npm run build -- --output-path=./dist/angular-client
#  --configuration production --output-path=./dist/angular-client included
RUN npm run build:prod

#### Stage 2, use the compiled app, ready for production with Nginx
# FROM nginx
FROM nginx:1.19.6-alpine

# Copy the angular build from Stage 1
COPY --from=build /app/dist/angular-client/ /usr/share/nginx/html

# Copy our custom nginx config
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
