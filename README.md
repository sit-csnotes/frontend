# CSNotes (frontend app)

This is a project for `CS 146C` at [Stevens Institute of Technology](https://stevens.edu).

This is the frontend for csnotes.app. `api.csnotes.app` will be in the API respository (to-be-made).

## Contributors:

* [Justin O'Boyle](https://github.com/justinoboyle)
* [Jan Gabriel Del Rosario](https://github.com/jdelrosa)
* [Tom Whittle](https://github.com/whittle0)
* [Kwasi Larrier](https://github.com/Bytes-o-Wisdom)

## Links

* [Requirements Document](REQUIREMENTS.md)
* [Docker Hub Project](https://hub.docker.com/repository/docker/justinoboyle/csnotes-frontend)

## Due dates

* Turn in CSS/HTML @ `10 November 2019`

## Testing on your local machine

**Without Docker**:
1. Fork and clone repo
2. `npm i`
3. `npm start`

## Deploy the app from Docker Hub

**With Docker**:

This is the command being used to deploy the app to the cloud:

```
docker run -d \
    --name csnotes-frontend \
    -p 3020:3020 \
    justinoboyle/csnotes-frontend
```

The container will automatically update when Docker Hub receives a new build.

## Notes

Keep in mind, this is the frontend server & not the API, so we should stick to static files for now. (especially because the first due date only requires )