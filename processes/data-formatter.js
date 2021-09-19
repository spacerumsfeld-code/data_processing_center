const ObjectsToCsv = require("objects-to-csv");
const rawData = require("../data/raw-data/rawData.js");

const processedData = rawData.data.reduce((cur, next) => {
  const obj = {
    text: next.text,
  };
  cur.push(obj);
  return cur;
}, []);

const csv = new ObjectsToCsv(processedData);

const exportToCSV = async () => {
  try {
    const newCSV = await csv.toDisk(
      `../data/export-data/${processedData.length}TweetBatch.csv`
    );
    console.log(
      `New CSV of ${processedData.length} tweets ready for training!`
    );
  } catch (error) {
    console.log(
      "Oops, something went wrong went exporting data to CSV:",
      error
    );
  }
};

exportToCSV();
