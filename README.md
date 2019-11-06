# CSNotes frontend

This is the frontend for csnotes.app. api.csnotes.app will be in the API respository.

## Testing on your local machine

1. Fork and clone repo
2. `npm i`
3. `npm start`

## Auto-deploy

The master branch will auto-deploy using the Docker image to csnotes.app.

Port `$PORT` shall be exposed.

Keep in mind, this is the frontend server, not the API, so we should stick to static files for now.