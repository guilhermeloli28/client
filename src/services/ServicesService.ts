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
  async delete(id: string) {
    return await fetch(`http://localhost:3001/services/${id}`, {
      method: 'DELETE'
    });
  }
}

export default new ServicesService();
