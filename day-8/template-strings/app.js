const USER = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
};

const CLASS_NAME = 'container';
const html = 
    `<div class="${CLASS_NAME}">
    <h2>Welcome${(USER.goldStatus ? ' to our gold status member, ' : ', ')}
    ${USER.name}!</h2>
    <p>Today is ${new Date()}</p>
    <p>You have logged in ${++USER.loginCount} times.</p>
    </div>`;
    
document.getElementById('target').innerHTML = html;