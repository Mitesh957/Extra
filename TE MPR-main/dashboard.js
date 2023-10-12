// JavaScript to populate dashboard elements dynamically
window.addEventListener('DOMContentLoaded', (event) => {
    const dashboardContent = document.getElementById('dashboard-content');
    
    // Example 1: Create and append a dashboard element
    const element1 = createDashboardElement('Statistics', 'This is your statistics.');
    dashboardContent.appendChild(element1);
    
    // Example 2: Create and append another dashboard element
    const element2 = createDashboardElement('Recent Transactions', 'List of recent transactions.');
    dashboardContent.appendChild(element2);
    
    // Example 3: Create and append one more dashboard element
    const element3 = createDashboardElement('User Profile', 'Display user profile information.');
    dashboardContent.appendChild(element3);
    
    // You can add more dashboard elements or fetch data from an API and populate here
});

// Function to create a dashboard element
function createDashboardElement(title, content) {
    const element = document.createElement('div');
    element.classList.add('dashboard-element');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    
    element.appendChild(titleElement);
    element.appendChild(contentElement);
    
    return element;
}

