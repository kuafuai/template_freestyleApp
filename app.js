import express from 'express';
import attendanceService from './attendanceService';

const app = express();

app.post('/checkin', (req, res) => {
  try {
    const employeeInfo = req.body.employeeInfo;
    const checkinTime = req.body.checkinTime;

    if (!employeeInfo || !checkinTime) {
      return res.status(400).send('Invalid request');
    }

    attendanceService.checkIn(employeeInfo, checkinTime);

    const responseMessage = `Check-in successful for employee ${employeeInfo.name} at ${checkinTime}`;
    res.send(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during check-in');
  }
});

export default app;