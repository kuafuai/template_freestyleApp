// Handles the logic of the robot
// Add any necessary functions here

// Example:
function analyzeRedPacket(redPacket) {
    // Analyze red packet logic
    let totalAmount = 0;
    let totalQuantity = 0;

    for (let i = 0; i < redPacket.length; i++) {
        totalAmount += redPacket[i].amount;
        totalQuantity += redPacket[i].quantity;
    }

    let averageAmount = totalAmount / totalQuantity;

    return {
        totalAmount: totalAmount,
        totalQuantity: totalQuantity,
        averageAmount: averageAmount
    };
}
