#!/bin/bash

cp index.html dist/index.html
cp -r public/* dist
cd dist
sudo cp -r * /var/www/html
