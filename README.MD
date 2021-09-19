## Data Processing Center

This repo exists as a learning center for processing data with node and other tools. Additionally, the goal is to automate these processes.

### Current Functionality

1. Format a batch of tweets from the twitter API

### To Use

1. Use postman to retrieve a batch of tweets. Copy that data into the file "rawData"
2. run node on the 'processor' file to output a CSV with formatted tweets
3. ???
4. Profit

### Future Improvements/Learning

1. Instead of manually doing Postman requests, create a file or script in this repo to send a request for tweets
2. Have an additional script or command that takes the response and outputs them into a file here for processing
3. Properly secure the keys necessary for this request
4. Create makefile commands for each step of the process: getting a batch, and processing a batch
5. Figure out if there isn't a way to train my model from "my couch", I.E., sending the processed data from here to my model for training instead of having to use the GUI

### Random Tasks

1. Create script to automate twitter API request
2. Format response properly for processing: must have an array of objects
3. Create output file "rawData" from response with:
   3a. rawData variable that is exported
   3b. rawData variable that is equal to array of tweet objects from response
4. Format data and output CSV file to 'processed-data' directory
5. Develop makefile commands for each step
