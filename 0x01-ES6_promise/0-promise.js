export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("It worked!");
      } else {
        reject(new Error("It broke"));
      }
    }, 1000);
  });
}
