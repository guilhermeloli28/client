function delay(interval = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

class ServicesService {
  async get() {
    const response = await fetch('http://localhost:3001/services');

    await delay(500);

    return response.json();
  }
}

export default new ServicesService();
