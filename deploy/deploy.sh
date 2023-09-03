PROJECT_NAME=$1 # parameter
BUILD_FOLDER="build"
DEST_PATH="/var/www/$PROJECT_NAME/html"

cd ~/"$PROJECT_NAME" # cd to project folder
git pull
npm install
npm run build:prod # build the project

rm -rf "$DEST_PATH" # delete the old static files
mv "$BUILD_FOLDER" "$DEST_PATH" # move the new files to the static destination folder