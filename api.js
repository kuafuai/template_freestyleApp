// api.js
// Define API module
const api = {
    buyDevice(deviceId) {
        return new Promise((resolve, reject) => {
            // Simulate API call
            const timeout = setTimeout(() => {
                reject('Purchase timed out');
            }, 5000); // Set a timeout of 5 seconds

            setTimeout(() => {
                const success = Math.random() < 0.8; // 80% success rate
                clearTimeout(timeout); // Clear the timeout if the API call completes before the timeout duration
                if (success) {
                    resolve('Purchase successful');
                } else {
                    reject('Purchase failed');
                }
            }, 1000);
        });
    }
};

export default api;
