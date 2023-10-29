import db from './db';

const attendanceModel = {
  saveCheckInRecord: (employeeInfo, checkinTime) => {
    // Implementation details
    const checkInRecord = {
      employeeInfo: employeeInfo,
      checkinTime: checkinTime
    };
    db.save(checkInRecord);
  }
};

export default attendanceModel;