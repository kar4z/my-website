document.addEventListener('DOMContentLoaded', function() {

  var form = document.getElementById('contactForm');
  

  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
      });
});
document.addEventListener('DOMContentLoaded', function() {
var form = document.getElementById('header-text')
form.style.fontSize="50px"
});

  document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
      var now = new Date();
      
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      var formattedDateTime = now.toLocaleString('en-US', options);
      
      document.getElementById('dateTimeDisplay').textContent = formattedDateTime;
    }
  
    updateDateTime();
    
    setInterval(updateDateTime, 1000);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('theme');
    let isNightMode = savedTheme === 'dark';
  
    // Set initial theme
    if (isNightMode) {
      document.body.style.backgroundColor = '#121212'; // Changed from 'gray' to '#121212'
      document.body.style.color = 'white';
      themeToggleBtn.textContent = 'Switch to Day Mode';
    }
  
    themeToggleBtn.addEventListener('click', function() {
      if (isNightMode) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#121212'; // Changed from 'gray' to '#121212'
        themeToggleBtn.textContent = 'Switch to Night Mode';
        localStorage.setItem('theme', 'light');
      } else {
        document.body.style.backgroundColor = '#121212'; // Changed from 'gray' to '#121212'
        document.body.style.color = 'black';
        themeToggleBtn.textContent = 'Switch to Day Mode';
        localStorage.setItem('theme', 'dark');
      }
      isNightMode = !isNightMode;
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.getElementById('readMoreBtn');
    var moreContent = document.getElementById('moreContent');
  
    readMoreBtn.addEventListener('click', function() {
      if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
      } else {
        moreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var resetBtn = document.getElementById('resetBtn');
    var contactForm = document.getElementById('contactForm');
    
    resetBtn.addEventListener('click', function() {
      document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(input) {
        input.value = '';
      });
      
      contactForm.classList.remove('was-validated');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var orderNowBtn = document.getElementById('orderNowBtn');
    var clickSound = document.getElementById('clickSound');
  
    orderNowBtn.addEventListener('click', function() {
      clickSound.play();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var promoBanner = document.getElementById('promoBanner');
  
    setTimeout(function() {
      promoBanner.classList.add('hidden');
    }, 2500);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutSection = document.getElementById('logoutSection');
    const usernameInput = document.getElementById('username');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userGreeting = document.getElementById('userGreeting');
  
    // Check if user is already logged in
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      loginForm.style.display = 'none';
      logoutSection.style.display = 'block';
      userGreeting.textContent = savedUsername;
    }
  
    // Login event
    loginBtn.addEventListener('click', function() {
      const username = usernameInput.value;
      if (username) {
        localStorage.setItem('username', username);
        loginForm.style.display = 'none';
        logoutSection.style.display = 'block';
        userGreeting.textContent = username;
      }
    });
  
    // Logout event
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('username');
      loginForm.style.display = 'block';
      logoutSection.style.display = 'none';
      usernameInput.value = '';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filterSelect');
    const menuItems = document.querySelectorAll('.menu-item');
  
    // Load saved filter setting
    const savedFilter = localStorage.getItem('filter');
    if (savedFilter) {
      filterSelect.value = savedFilter;
      applyFilter(savedFilter);
    }
  
    // Apply filter on change
    filterSelect.addEventListener('change', function() {
      const selectedFilter = filterSelect.value;
      localStorage.setItem('filter', selectedFilter);
      applyFilter(selectedFilter);
    });
  
    function applyFilter(filter) {
      menuItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
  