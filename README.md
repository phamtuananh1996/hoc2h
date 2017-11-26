#setup enviroment ubuntu

# install npm, nodemon, @angular/cli, typescript
sudo apt-get install npm

sudo npm install nodemon -g

npm install -g @angular/cli

suto apt-get install typescript

# install nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs

# install mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo service mongod start

# development server

copy .env.example to .env

npm install

cd client

npm install

run `ng serve` for a client dev. Navigate to `http://localhost:4200`.  The app will automatically reload if you change any of the source files.

cd hoc2h

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

#nat port 80 to 3000
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

# set user admin
http://localhost:3000/api/auth/set-admin


## git flow, khi phat trien tinh nang moi

git checkout develop
git pull origin develop
git checkout ten_nhanh (vd: huubv)
git merge develop

## code cac kieu xong
git add .
git commit -m 'comment'
git push origin ten_nhanh (vd: huubv)

## len git tao pull request tu nhanh cua minh vao nhanh develop

# cach fix conflict
git checkout develop
git pull origin develop
git checkout ten_nhanh
git merge develop
-> sua code
git add .
git commit -m 'comment'
git push orgin ten_nhanh

# install pm2
sudo npm install pm2 -g

cd hoc2h
npm install
sudo pm2 start ./bin/www --watch -i max
sudo pm2 start socket.js --watch
sudo pm2 startup
sudo pm2 save

cd hoc2h/client
npm install
npm start
