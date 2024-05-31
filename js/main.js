// This file is responsible for handling the logic of the pages

// Backend homepage logic
fetchStatisticsData()
  .then(data => {
    document.getElementById('pendingOrdersCount').textContent = data.pendingOrdersCount;
    document.getElementById('totalOrdersCount').textContent = data.totalOrdersCount;
    document.getElementById('ongoingOrdersCount').textContent = data.ongoingOrdersCount;
    document.getElementById('completedOrdersCount').textContent = data.completedOrdersCount;
    document.getElementById('totalDriversCount').textContent = data.totalDriversCount;
    document.getElementById('newDriversCount').textContent = data.newDriversCount;
  })
  .catch(error => {
    console.error('Failed to fetch statistics data:', error);
  });

// Login page logic
document.getElementById('loginButton').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const verificationCode = document.getElementById('verificationCode').value;

  if (validateLoginCredentials(username, password, verificationCode)) {
    window.location.href = './index.html';
  } else {
    document.getElementById('errorMessage').textContent = 'Invalid username, password, or verification code';
  }
});

// Helper functions
function fetchStatisticsData() {
  return fetch('/api/statistics')
    .then(response => response.json());
}

function validateLoginCredentials(username, password, verificationCode) {
  return username === 'admin' && password === 'password' && verificationCode === '123456';
}
