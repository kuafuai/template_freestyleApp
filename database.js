// database.js
// Define database module
const database = {
    devices: [
        {
            deviceId: 1,
            deviceImage: 'device1.jpg',
            deviceName: 'Device 1',
            deviceSpecs: 'Specs for Device 1',
            purchaseDate: '2022-01-01',
            purchasePrice: 1000,
            intendedPrice: 800
        },
        {
            deviceId: 2,
            deviceImage: 'device2.jpg',
            deviceName: 'Device 2',
            deviceSpecs: 'Specs for Device 2',
            purchaseDate: '2022-02-01',
            purchasePrice: 1500,
            intendedPrice: 1200
        },
        // Add more devices here
    ],

    /**
     * Get all devices
     * @returns {Array} Array of devices
     */
    getDevices() {
        return this.devices;
    },

    /**
     * Get device by id
     * @param {number} id - The id of the device
     * @returns {Object} The device object
     */
    getDeviceById(id) {
        const device = this.devices.find(device => device.deviceId === id);
        if (!device) {
            throw new Error('Device not found');
        }
        return device;
    }
};

export default database;
