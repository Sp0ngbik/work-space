FROM node

# WORKDIR /src

# COPY package.json parckage-lock.json 
# COPY . .

# RUN npm run build

CMD ["npm","start"]