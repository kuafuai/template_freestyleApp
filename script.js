function uploadFile() {
    // Get the file input element
    var fileInputElement = document.getElementById('fileInput');
    var file = fileInputElement.files[0];
    var formData = new FormData();
    formData.append('file', file);

    // Send the file to the server for upload
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display the server response message
        document.getElementById('output').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function renameFile() {
    // Get the new filename input element
    var newFilenameInputElement = document.getElementById('newFilenameInput');
    var newFilename = newFilenameInputElement.value;
    var oldFilename = document.getElementById('output').innerHTML;

    // Send the new and old filenames to the server for renaming
    fetch('/rename', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `new_filename=${newFilename}&old_filename=${oldFilename}`
    })
    .then(response => response.json())
    .then(data => {
        // Display the server response message
        document.getElementById('output').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function getFilename() {
    var filename = document.getElementById('output').innerHTML;

    // Get the filename from the server
    fetch(`/get_filename?filename=${filename}`)
    .then(response => response.json())
    .then(data => {
        // Display the filename
        document.getElementById('output').innerHTML = `Filename: ${data.filename}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function getFilesize() {
    var filename = document.getElementById('output').innerHTML;

    // Get the filesize from the server
    fetch(`/get_filesize?filename=${filename}`)
    .then(response => response.json())
    .then(data => {
        // Display the filesize
        document.getElementById('output').innerHTML = `Filesize: ${data.filesize} bytes`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
