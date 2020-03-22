import fs from "fs";

export const assert = (...args) => {
  try {
    console.assert(...args);
  } catch (err) {
    console.error(err);
  }
};

export const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
