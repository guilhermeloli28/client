function delay(interval = 1000) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
}

class ProfessionalsService {
  async get() {
    const response = await fetch('http://localhost:3001/professionals');

    await delay(500);

    return response.json();
  }
}

export default new ProfessionalsService();
