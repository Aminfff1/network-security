
    window.addEventListener('load', () => {
        document.getElementById('loadingScreen').style.display = 'none';
    });

    // تبديل علامات التبويب في نموذج تسجيل الدخول
    function switchTab(tabId) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginTab = document.getElementById('loginTab');
        const registerTab = document.getElementById('registerTab');

        if (tabId === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            loginTab.classList.add('tab-active');
            registerTab.classList.remove('tab-active');
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            loginTab.classList.remove('tab-active');
            registerTab.classList.add('tab-active');
        }
    }

    // تفعيل مفاتيح التبديل
    document.addEventListener('DOMContentLoaded', () => {
        const toggleSwitches = document.querySelectorAll('.toggle-switch input[type="checkbox"]');
        toggleSwitches.forEach(toggleSwitch => {
            toggleSwitch.addEventListener('change', function() {
                if (this.checked) {
                    this.parentNode.classList.add('active');
                } else {
                    this.parentNode.classList.remove('active');
                }
            });
        });
    });

    // وظائف التنقل
    function addNewNetwork() {
        window.location.href = 'add-network.html';
    }

    function showLogoutConfirmation() {
        document.getElementById('logoutConfirmationModal').classList.remove('hidden');
        document.getElementById('logoutConfirmationModal').classList.add('flex');
    }

    function hideLogoutConfirmation() {
        document.getElementById('logoutConfirmationModal').classList.remove('flex');
        document.getElementById('logoutConfirmationModal').classList.add('hidden');
    }

    function logout() {
        // إضافة منطق تسجيل الخروج هنا
        window.location.href = 'login.html';
    }