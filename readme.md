# googleplaces.js

A node.js library for the Google Places API

### ugh?

googleplaces.js makes it easy to talk to the Google Places API from your Node.js application

### can i use in the browser?

Google already maintains a dedicated client side JavaScript [library](https://developers.google.com/places/javascript/)

### what's supported in 0.5.0?

- [Place search](https://developers.google.com/places/webservice/search)
- [Place details](https://developers.google.com/places/webservice/details)
- [Place autocomplete](https://developers.google.com/places/webservice/autocomplete)
- [Events](https://developers.google.com/places/documentation/events)

### can i contribute?

Yes, fork, hack and send me a PR

This library hopes to support everything served [Google Places webservice](https://developers.google.com/places/webservice/intro)

# get started

### 1. google

- Enable Google Places API on [Google API Console](https://console.developers.google.com)
    - Create an app
    - Enable the Places API
    - Create credentials

### 2. npm

    $ npm install googleplaces

### 3. configure

    # set environment variables
    export GOOGLE_PLACES_API_KEY = "your key here"
    export GOOGLE_PLACES_OUTPUT_FORMAT = "json"

# examples

See [tests](https://github.com/Srirangan/googleplaces.js/tree/master/test)
