
const queueData = {
    opd: "15 patients in queue",
    bedAvailability: "22 beds available across wards",
    patientAdmissions: "10 patients admitted in the last 24 hours"
};

function fetchOPDQueue() {
    
    document.getElementById('opd-queue').innerText = "Loading...";
    setTimeout(() => {
        
        document.getElementById('opd-queue').innerText = queueData.opd;
    }, 1000);  
}

function fetchBedAvailability() {
    
    document.getElementById('bed-availability').innerText = "Loading...";
    setTimeout(() => {
        document.getElementById('bed-availability').innerText = queueData.bedAvailability;
    }, 1000);  // Simulate a delay
}

function fetchPatientAdmissions() {
    
    document.getElementById('patient-admission').innerText = "Loading...";
    setTimeout(() => {
        document.getElementById('patient-admission').innerText = queueData.patientAdmissions;
    }, 1000);  
}
